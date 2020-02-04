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

export const gqlQuery = query => client.query({ query: gql(query) });

export const gqlMutation = mutation => client.mutate({ mutation: gql(`mutation Mutation {${mutation}}`)});