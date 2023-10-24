import createApolloClient from "@/apollo-client";
import { graphql } from "@/gql/index";
import { PostShort as PostShortProps } from "@/types";
import { ApolloClient } from "@apollo/client";
import Link from "next/link";

const GetAllPosts = graphql(`
query GetAllPosts {
  posts(sort: "publishedAt:DESC") {
    data {
      id
      attributes {
        author {
          data {
            id
            attributes {
              firstname
              lastname
              email
              shortbio
              image {
                data {
                  attributes{
                    url
                    name
                    formats
                  }
                }
              }
            }
          }
        }
        title
        content
        publishedAt
        image {
          data {
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
`)

export const getStaticProps = async () => {
  const client = createApolloClient();
  const {data} = await client.query({ query: GetAllPosts, variables: { } });

  return {
    props: {
      posts: data.posts?.data
    }
  }
}

const Template = ({posts}: {posts:PostShortProps[]}) => {
  return (
    <ul>
     {
      posts.map((post) => {
        return (
          <li key={post.id}>
            <Link style={{color: "inherit"}} href={{ pathname: `/blog/archive/[year]/`, query: {  } }}>
            {post.attributes.title}
            </Link>
            
          </li>
        )
      })
     }
    </ul>
  )
}

export default Template;