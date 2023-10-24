import createApolloClient from "@/apollo-client";
import { graphql } from "@/gql/index";
import { PostShort as PostShortProps } from "@/types";
import { ApolloClient } from "@apollo/client";


export const getStaticProps = async () => {
  const client = createApolloClient();
  //const {data} = await await client.query({ query: getAllRecentPosts, variables: { limit: 10 } });
  return {
    props: {
      posts: []
    }
  }
}

const ArchivePage = ({posts}: {posts:PostShortProps[]}) => {
  return (
    <ul>
     {
      posts.map((post) => {
        return (
          <li>{post.attributes.title}</li>
        )
      })
     }
    </ul>
  )
}

export default ArchivePage;