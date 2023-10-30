import styles from "../../styles/the-expanse.module.css";
import { Post as PostProps } from "@/types";
import { graphql } from "@/gql/index";
import createApolloClient from "@/apollo-client";
import DisplayCard from "@/components/DisplayCard/DisplayCard";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import BackToTop from "@/components/BackToTop/BackToTop";

const getRecentPosts = graphql(`
query GetPosts($limit: Int) {
  posts(sort: "publishedAt:DESC", pagination: { limit: $limit }) {
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
`);

export const getStaticProps = async () => {
  const client = createApolloClient();
  const { data } = await client.query({ query: getRecentPosts, variables: { limit: 10 } });

  let serializedPosts = await Promise.all(data.posts!.data.map(async (post) => {
    const mdxSource = await serialize(post.attributes?.content!);
    
    return {
      id: post.id,
      attributes: {
        author: post.attributes?.author?.data,
        title: post.attributes?.title,
        publishedAt: post.attributes?.publishedAt,
        content: mdxSource,
        image: post.attributes?.image
      }
    }
  })
  )
  return {
    props: {
      posts: serializedPosts
    }
  }
}

export const BlogPage = ({ posts }: { posts: PostProps[] }) => {

  return (
    <div className={styles.container}>
      <ul>
        {
          posts.map((post) => {
            return (
              <li key={post.id}>
                <DisplayCard post={post} />
              </li>
            )
          })
        }
      <div>
        <Link href="/blog/archive"> <button>Explore older posts</button></Link>
      </div>
      </ul>
      <div className={styles.backtotop}>
        <BackToTop />
      </div>
    </div>
  );
};

export default BlogPage;