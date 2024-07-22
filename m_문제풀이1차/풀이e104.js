const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "kys",
  port: 3306,
  password: "1234",
  database: "test_db",
});

db.connect((error) => {
  if (error) {
    console.log("접속실패!!");
    return;
  }
  console.log("MySQL Connected!");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log("웹에 정상 접속 하였습니다.");
});
app.get("/list", (req, res) => {
  db.query("SELECT * from web2", (err, results) => {
    let list = `<html><head><style>table {border-collapse: collapse;}tr,td,th {border: 1px solid black;}</style></head><body><table><tr><th>No.</th><th>ID</th><th>PW</th><th>Name</th><th>Email</th></tr>`;
    const data = results;
    data.forEach((v) => {
      list += `<tr><td>${v.num}</td><td>${v.id}</td><td>${v.pw}</td><td>${v.name}</td><td>${v.email}</td></tr>`;
    });
    list += `</table><strong><a href="/">돌아가기</a></strong></body></html>`;
    console.log(data);
    res.send(list);
  });
});

app.get("/data", (req, res) => {
  const { id, name, age, email } = req.query;
  db.query("INSERT INTO web2 ( id, name, age, email) VALUES (?,?,?,?)", [id, name, age * 1, email], (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect("/");
    console.log("Data inserted successfully");
  }); // MySQL query here
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
