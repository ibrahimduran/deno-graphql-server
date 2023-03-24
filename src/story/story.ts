import { createModule, gql } from 'graphql-modules'
 
export const storyModule = createModule({
  id: 'story-module',
  dirname: Deno.cwd(),
  typeDefs: [
    gql`
      type Query {
        story: String!
      }
    `
  ],
  resolvers: {
    Query: {
      story: () => 'world'
    }
  }
})