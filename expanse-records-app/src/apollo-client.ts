import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  console.log(process.env.CMS_URL);
  return new ApolloClient({
    link: new HttpLink({
      // http://host.docker.internal
      
      uri: `${process.env.CMS_URL}/graphql`,
      headers: {
        Authorization: `Bearer ${process.env.CMS_TOKEN}`
      }
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;