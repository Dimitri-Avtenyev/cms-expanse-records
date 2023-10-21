import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  console.log(process.env.CMS_URL);
  return new ApolloClient({
    link: new HttpLink({
      // http://host.docker.internal
      
      uri: `http://host.docker.internal:1337/graphql`,
      headers: {
        Authorization: `Bearer ${process.env.CMS_TOKEN}`
      }
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;