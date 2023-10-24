import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  
let uri:string = process.env.NODE_ENV === "production" ?
  `${process.env.CMS_URL}/graphql` : "http://host.docker.internal:1337/graphql";

  return new ApolloClient({
    link: new HttpLink({
      // http://host.docker.internal
      
      uri: uri,
      headers: {
        Authorization: `Bearer ${process.env.CMS_TOKEN}`
      }
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;