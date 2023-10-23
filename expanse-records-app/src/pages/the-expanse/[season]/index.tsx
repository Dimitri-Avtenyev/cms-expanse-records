import createApolloClient from "@/apollo-client";
import { Episode as EpisodeProps } from "@/types";
import DisplayCard from "@/components/DisplayCard/DisplayCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { graphql } from "@/gql/index";

const GetAllSeasonIds = graphql(`
query GetAllSeasonIds {
  seasons (sort:"id"){data{id}} 
}

`);
const GetEpisodesForSeasonID = graphql(`
query GetEpisodesForSeasonID($id: ID) {
  season(id: $id) {
    data {
      attributes {
        episodes {
          data {
            attributes {
              title
              air_date
              synopsis
              episodeNum
              episodeId
              image {
                data {
                  id
                  attributes {
                    url
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

`)
export const getStaticPaths = async () => {
  const client = createApolloClient();
  const { data } = await client.query({ query: GetAllSeasonIds, variables: {} });

  const paths = data.seasons?.data.map((season) => {
    return {
      params: {
        season: `s${season.id}`
      }
    }
  });

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async ({params}: {params:{season:string}}) => {
  // --- GRAPHQL --- // 
  const client = createApolloClient();
  const { data } = await client.query({ query: GetEpisodesForSeasonID, variables: {id: params.season.split("s")[1] }});

  return {
    props: {
      episodes: data.season?.data?.attributes?.episodes?.data
    }
  }
}

const Episodes = ({ episodes }: { episodes: EpisodeProps[] }) => {
  const router = useRouter();
  return (
    <div >
      <ul>
        {
          episodes.map((episode: EpisodeProps, index: number) => {
            return (
              <li key={index}>
              <Link style={{color: "inherit"}} href={{ pathname: `/the-expanse/[season]/${episode.attributes.episodeNum}`, query: { season: router.query.season } }}>Episode {index + 1}
                <DisplayCard episode={episode} />
              </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Episodes;