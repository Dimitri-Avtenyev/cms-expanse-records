interface PostInterface {
  id:         number;
  attributes: {
    title:    string;
    content:  string
  }
}
export const getStaticProps = async () => {

  const response:Response = await fetch(`${process.env.CMS_URL}/api/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.CMS_TOKEN}`
    }
  });
  const json = await response.json();
  const posts:PostInterface[] = json.data;
  
  return {
    props: {
      posts: posts
    }
  }
}

export const Post = ({posts}: {posts:PostInterface[]}) => {
  return (
    <div>
      {
        posts.map((post) => {
          return (
            <div>
              <h1>{post.attributes.title}</h1>
              <p>{post.attributes.content}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default Post;