import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://dev.peddlesoft.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
