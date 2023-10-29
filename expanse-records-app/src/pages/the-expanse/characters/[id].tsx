import { graphql } from "@/gql/index";
import DisplayCard from "@/components/DisplayCard/DisplayCard";
import { Character as CharacterProps } from "@/types";
import createApolloClient from "@/apollo-client";
import Link from "next/link";

const GetAllCharacterIds = graphql(`
query GetAllCharacterIds {
  characters {
    data {
      id
    }
  }
}
`);

const GetCharacterById = graphql(`
query GetCharacter($id: ID) {
  character(id: $id) {
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
`);

export const getStaticPaths = async () => {
  const client = createApolloClient();
  const { data } = await client.query({ query: GetAllCharacterIds, variables: {} });

  const paths = data.characters?.data.map(character => {
    return {
      params: {
        id: character.id?.toString()
      }
    }
  });

  return {
    paths: paths,
    fallback: false
  }
}
export const getStaticProps = async ({params}:{params: {id:string}}) => {
  const client = createApolloClient();
  const { data } = await client.query({query: GetCharacterById, variables: {id: params.id}})
  return {
    props: {
      character: data.character?.data
    }
  }
}
const CharacterPage = ({character}:{character:CharacterProps}) => {

  return (
    <div>
      <DisplayCard character={character}/>
      <Link
        href={{ pathname: `/the-expanse/characters`}}
      >
        <button>Back</button>
      </Link>
    </div>
  )
}

export default CharacterPage;