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

app.get("/list", (req, res) => {
  db.query("SELECT * from web2", (err, results) => {
    const data = results;
    console.log(data);
    let list = `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">`;
    list += `    <title>리스트</title>`;
    list += `    <style>`;
    list += `        table {`;
    list += `            border-collapse: collapse;`;
    list += `            text-align: center;`;
    list += `            width: 80%;`;
    list += `            margin: auto;`;
    list += `        }`;
    list += ``;
    list += `        th,`;
    list += `        tr,`;
    list += `        td {`;
    list += `            border: 1px solid #ccc;`;
    list += `        }`;
    list += ``;
    list += `        td {`;
    list += `            width: 20%;`;
    list += `        }`;
    list += ``;
    list += `        h2 {`;
    list += `            text-align: center;`;
    list += `        }`;
    list += ``;
    list += `        th {`;
    list += `            background-color: lightblue;`;
    list += `        }`;
    list += `    </style>`;
    list += `</head>`;
    list += ``;
    list += `<body>`;
    list += `    <!-- table>tr>th*5^tr>td*5 -->`;
    list += `    <h2>데이터베이스 내용</h2>`;
    list += `<button type="button" onclick="location.href='/' ">뒤로가기</button>`;

    list += `    <table>`;
    list += `        <tr>`;
    list += `            <th>No.</th>`;
    list += `            <th>ID</th>`;
    list += `            <th>이름</th>`;
    list += `            <th>나이</th>`;
    list += `            <th>이메일</th>`;
    list += `        </tr>`;

    data.forEach((v) => {
      list += `        <tr>`;
      list += `            <td>${v.num}</td>`;
      list += `            <td>${v.id}</td>`;
      list += `            <td>${v.name}</td>`;
      list += `            <td>${v.age}</td>`;
      list += `            <td>${v.email}</td>`;
      list += `        </tr>`;
    });

    list += `    </table>`;
    list += `</body>`;
    list += ``;
    list += `</html>`;
    res.send(list);
  });
});

app.get("/data", (req, res) => {
<<<<<<< HEAD
  const { num, id, pw, name, email } = req.query;
  db.query("INSERT INTO web2 (num,id,pw,name,email) VALUES (?,?,?,?,?)", [num, id, pw, name, email], (err, result) => {
=======
  const { id, name, age, email } = req.query;
  db.query("INSERT INTO web2 ( id, name, age, email) VALUES (?,?,?,?)", [id, name, age * 1, email], (err, result) => {
>>>>>>> 9bdf59c90eba1256b2fb13c7ebc62b8f368f53b4
    if (err) {
      console.log(err);
      return;
    }
<<<<<<< HEAD
    res.redirect("/list");
=======
    res.redirect("/");
>>>>>>> 9bdf59c90eba1256b2fb13c7ebc62b8f368f53b4
    console.log("Data inserted successfully");
  }); // MySQL query here
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
