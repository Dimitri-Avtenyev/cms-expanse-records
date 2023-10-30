import createApolloClient from "@/apollo-client";
import { graphql } from "@/gql/index";
import styles from "@/styles/the-expanse.module.css";
import DisplayCard from "@/components/DisplayCard/DisplayCard";
import { Character as CharacterProps } from "@/types";
import Link from "next/link";

const GetAllCharacters = graphql(`
query GetAllCharacters {
  characters(pagination:{limit: 50}) {
    data {
      id
      attributes {
        name
        bio
        image {
          data {
            attributes {
              url
              name
              formats
            }
          }
        }
      }
    }
  }
}
`
)
export const getStaticProps = async () => {
  const client = createApolloClient();
  const { data } = await client.query({ query: GetAllCharacters, variables: {}});


  return {
    props: {
      characters: data.characters?.data
    }
  }
}

const CharactersPage = ({characters}:{characters:CharacterProps[]}) => {

  return (
    <div className={styles.container}>
      <h2>Pivotal Characters</h2>
      <ul>
        {
          characters.map((character) => {
            return (
              <li key={character.id}>
                <Link href={{ pathname: "/the-expanse/characters/[id]", query: { id: character.id } }}>
                <DisplayCard character={character}/>
                </Link>
       
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default CharactersPage;