import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link:  new HttpLink({ uri: 'http://localhost:4000' }),
  name: 'fruit-agents-client',
  version: '1.3',
});

export const queryGQL = query => {
  return client.query({ query: gql(query) })
}