import createApolloClient from "@/apollo-client";
import DisplayCard from "@/components/DisplayCard/DisplayCard";
import { graphql } from "@/gql/index";
import {Author as AuthorProps} from "@/types";
const getAllAuthorIds = graphql(`
query GetAllAuthorIds {
  authors(pagination: { limit: 999 }) {
    data {
      id
    }
  }
}
`);
const getAuthor = graphql(`
query GetAuthor($id: ID) {
  author(id: $id) {
    data {
      id
      attributes {
        firstname
        lastname
        shortbio
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
  const {data} = await client.query({ query: getAllAuthorIds, variables: {}});

  const paths = data.authors?.data.map(author => {
    return {
      params: {
        id: author.id
      }
    }
  })
  return {
    paths: paths,
    fallback: false
  }
}
export const getStaticProps = async ({params}:{params: {id:string}}) => {
  const client = createApolloClient();
  const {data} = await client.query({ query: getAuthor, variables: {id: params.id}});

  return {
    props: {
      author: data.author?.data
    }
  }

}
const ProfilePage = ({author}: {author:AuthorProps}) => {
  return (
    <div>
      <DisplayCard author={author}/>
    </div>
  );
}

export default ProfilePage;