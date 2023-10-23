import { useRouter } from "next/router";
import { Episode as EpisodeProps } from "@/types";
import DisplayCard from "@/components/DisplayCard/DisplayCard";
import createApolloClient from "@/apollo-client";
import { graphql } from "@/gql/index";
import Link from "next/link";

const GetEpisodeForSeasonWithEpisodeNum = graphql(`
query GetEpisodeForSeasonWithEpisodeNum($id: ID, $episodeNum: Int) {
  season(id: $id) {
    data {
      attributes {
        episodes(filters: { episodeNum: { eq: $episodeNum } }) {
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

const GetSeasonsWithEpisodes = graphql(`
query GetSeasonsWithEpisodes  {
  seasons(sort:"id") {
    data {
      id
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
`);
export const getStaticPaths = async () => {
  // --- GRAPHQL --- // 
  const client = createApolloClient();
  const { data } = await client.query({ query: GetSeasonsWithEpisodes, variables: {} });

  const paths: any[] = [];
  data.seasons?.data.forEach((season) => {
    season.attributes?.episodes?.data.forEach(episode => {
      paths.push(
        {
          params:
          {
            season: "s" + season.id?.toString(),
            episode: episode.attributes?.episodeNum?.toString()
          }
        });
    });
  });

  return {
    paths: paths,
    fallback: false

  }
}

export const getStaticProps = async ({ params }: { params: { season: string, episode: string } }) => {
  const client = createApolloClient();
  const { data } = await client.query({ query: GetEpisodeForSeasonWithEpisodeNum, variables: { id: params.season.split("s")[1], episodeNum: parseInt(params.episode) } });
  //console.log(data.season?.data?.attributes?.episodes?.data);
  return {
    props: {
      episode: data.season?.data?.attributes?.episodes?.data[0],
      season: params.season
    }
  }

}
const Episode = ({ season, episode }: { season: string, episode: EpisodeProps }) => {

  return (
    <div>
      <h1>Season {season.slice(1)} </h1>
      <h2>Episode {episode.attributes.episodeNum}</h2>
      <p>First aired: {episode.attributes.air_date.toString()}</p>
      <DisplayCard episode={episode} />
      
      <Link
        href={{ pathname: `/the-expanse/[season]`, query: { season: season } }}
      >
        <span>Back</span>
      </Link>
    </div>
  );
};

export default Episode;