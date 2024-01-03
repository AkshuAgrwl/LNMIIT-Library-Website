const express = require("express");
const { chats } = require("./data/data");

const app = express();
// app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is Running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  console.log(singleChat);
  if (singleChat == undefined) {
    res.json({
      msg: "Chat ID is undefined",
    });
    return;
  }
  res.json(singleChat);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
