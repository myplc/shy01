const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "localhost", // 호스트주소
  port: "3336",
  user: "user1", // MySQL의 유저네임
  password: "67890", // 비번
  database: "web", // DB이름
});
db.connect((err) => {
  if (err) {
    console.log("접속실패!!!");
    return;
  }
  console.log("MySQL에 정상접속하였습니다!");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log("웹에 정상 접속 하였습니다!");
});

app.get("/data", (req, res) => {
  const { name, dob } = req.query;
  db.query("INSERT INTO users (name, dob) VALUES (?,?)", [name, dob], (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data inserted!", result);
  });
  console.log(name, dob);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
