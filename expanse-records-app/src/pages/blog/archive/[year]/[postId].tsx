import createApolloClient from "@/apollo-client";
import { graphql } from "@/gql/index";
import DisplayCard from "@/components/DisplayCard/DisplayCard";
import { Post as PostProps } from "@/types";
import { serialize } from "next-mdx-remote/serialize";
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

const GetPost = graphql(`

query GetPost($id: ID) {
  post(id: $id) {
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
export const getStaticPaths = async () => {
  const client = createApolloClient();
  const { data } = await client.query({ query: GetAllYearPosts, variables: {} });


  const paths = data.posts?.data.map(post => {
    return {
      params: {
        year: post.attributes?.publishedAt.substring(0,4),
        postId: post.id?.toString()
      }
    }
  });
  return {
    paths: paths,
    fallback: false
  }
}
export const getStaticProps = async ({ params }: { params: { postId: string , year:string} }) => {
  const client = createApolloClient();
  const { data } = await client.query({ query: GetPost, variables: { id: params.postId } });
  const mdxSource = await serialize(data.post?.data?.attributes?.content!);

  const post = {
    id: parseInt(params.postId),
    attributes: {
      author: data.post?.data?.attributes?.author?.data,
      title: data.post?.data?.attributes?.title!,
      publishedAt: data.post?.data?.attributes?.publishedAt,
      content: mdxSource,
      image: data.post?.data?.attributes?.image
    }
  }
  return {
    props: {
      post: post,
      year:params.year
    }
  }
}
const ArchivePostPage = ({ post, year }: { post: PostProps, year:string }) => {

  return (
    <div>
      <DisplayCard post={post} />
      <Link
        href={{ pathname: `/blog/archive/[year]`, query: { year: year } }}
      >
        <button>Back</button>
      </Link>
    </div>
  );
};

export default ArchivePostPage;