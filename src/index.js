import express from "express";
import resolvers from "./resolvers";
import schema from "./schema";

import { graphqlHTTP } from "express-graphql"

const app = express()

app.get("/", (req,res) => {
  res.send("Server is Up and Running !!!")
})

const root = resolvers

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))


app.listen(6500, () => console.log("server is running at 6500 port"))