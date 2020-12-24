import express from "express";

const app = express()

app.get("/", (req,res) => {
  res.send("Server is Up and Running !!!")
})

app.listen(6500, () => console.log("server is running at 6500 port"))