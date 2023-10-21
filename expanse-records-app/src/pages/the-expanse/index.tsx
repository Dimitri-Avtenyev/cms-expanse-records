import Link from "next/link";
import styles from "../../styles/the-expanse.module.css";
import { Season as SeasonProps } from "@/types";
import DisplayCard from "@/components/DisplayCard/DisplayCard";
import { graphql } from "@/gql/index";
import createApolloClient from "@/apollo-client";

const GetAllSeasons = graphql(`
query GetAllSeasons {
  seasons(sort:"id") {
    data {
      attributes {
        title
        createdAt
        updatedAt
        publishedAt
        synopsis
        metacriticRating
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
  episodes {
    data {
      id
      attributes {
        title
        air_date
        synopsis
        createdAt
        updatedAt
        publishedAt
        episodeNum
        episodeId
      }
    }
  }
}

`);

export const getStaticProps = async () => {

  // --- GRAPHQL --- // 
  const client = createApolloClient();
  const { data } = await client.query({ query: GetAllSeasons, variables: {} })
  // ---- REST --- /// 
  // const response: Response = await fetch(`${process.env.CMS_URL}/api/seasons?populate=*`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Authorization": `Bearer ${process.env.CMS_TOKEN}`
  //   }
  // });
  // const json = await response.json();
  // const seasons = data;

  // seasons.sort((a, b) => a.id - b.id);

  return {
    props: {
      seasons: data.seasons?.data
    }
  }
}

const Seasons = ({ seasons }: { seasons: SeasonProps[] }) => {

  return (
    <div className={styles.container}>
      <ul>
        {
          seasons.map((season: SeasonProps, index: number) => {
            return (
              <li key={index}>
                <Link href={{ pathname: "/the-expanse/[season]", query: { season: `s${index + 1}` } }}>
                  <DisplayCard season={season} />
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Seasons;