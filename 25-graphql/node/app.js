import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import fs from "fs";
import {
  getBlogsResolver,
  getBlogResolver,
  createBlogResolver,
} from "./graphql/resolvers/blogsResolvers.js";
import { createUserResolver } from "./graphql/resolvers/usersResolver.js";

// Resolvers define how to fetch the types defined  schema.
const resolvers = {
  Query: {
    blogs: getBlogsResolver,
    blog: getBlogResolver,
  },
  Mutation: {
    createBlog: createBlogResolver,
    createUser: createUserResolver,
  },
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync("./graphql/schema/schema.graphql", "utf8"),
  resolvers,
});

// creates an Express app and installs ApolloServer instance as middleware
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
