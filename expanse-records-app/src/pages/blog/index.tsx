import styles from "../../styles/the-expanse.module.css";
import { Post as PostProps } from "@/types";
import { graphql } from "@/gql/index";
import createApolloClient from "@/apollo-client";
import DisplayCard from "@/components/DisplayCard/DisplayCard";
import { serialize } from "next-mdx-remote/serialize";

const getAllRecentPosts = graphql(`
query GetAllPosts($limit: Int) {
  posts(sort: "publishedAt:DESC", pagination: { limit: $limit }) {
    data {
      id
      attributes {
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
  const { data } = await client.query({ query: getAllRecentPosts, variables: { limit: 10 } });

  let serializedPosts = await Promise.all(data.posts!.data.map(async (post) => {
    const mdxSource = await serialize(post.attributes!.content!);
    return {
      id: post.id,
      attributes: {
        title: post.attributes?.title,
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
      </ul>
    </div>
  );
};

export default BlogPage;