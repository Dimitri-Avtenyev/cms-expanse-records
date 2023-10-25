import createApolloClient from "@/apollo-client";
import { graphql } from "@/gql/index";
import { PostShort as PostShortProps } from "@/types";
import Link from "next/link";

const GetAllYearPosts = graphql(`
query GetAllYearPosts {
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
`);
export const getStaticPaths = async () => {
  const client = createApolloClient();
  const { data } = await client.query({ query: GetAllYearPosts, variables: {} });

  const paths = data.posts?.data.map((post) => {
    return {
      params: {
        year: post.attributes?.publishedAt.substring(0, 4)
      }
    }
  })
  return {
    paths: paths,
    fallback: false
  }
}
export const getStaticProps = async ({ params }: { params: { year: string } }) => {
  const client = createApolloClient();
  const { data } = await client.query({ query: GetAllYearPosts, variables: {} });

  const yearPosts = data.posts?.data.filter(post => post.attributes?.publishedAt.substring(0, 4) === params.year)
  return {
    props: {
      posts: yearPosts,
      year: params.year
    }
  }
}

const ArchivePostsPage = ({ posts, year }: { posts: PostShortProps[], year:string }) => {
  return (
    <ul>
      {
        posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={{ pathname: `/blog/archive/[year]/[id]`, query: {year: year, id:post.id} }}>
                <p>{post.attributes.title}</p>
              </Link>

            </li>
          )
        })
      }
    </ul>
  )
}

export default ArchivePostsPage;