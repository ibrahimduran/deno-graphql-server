import { createModule, gql } from 'graphql-modules'
 
export const authModule = createModule({
  id: 'auth-module',
  dirname: Deno.cwd(),
  typeDefs: [
    gql`
      type Query {
        auth: String!
      }
    `
  ],
  resolvers: {
    Query: {
      auth: () => 'world'
    }
  }
})