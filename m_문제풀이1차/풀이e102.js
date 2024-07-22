const express = require("express");
const bodyParser = require("body-parser"); //모듈 import. Express v4.16.0이상은 설치 생략 가능

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/e002.html");
});
app.post("/login", (req, res) => {
  const { username, password } = req.body; // query 는 get 방식

  if (username === "admin" && password == "123456") {
    res.send(`
      <div class="container">
          <h1>관리자로 로그인 하셨습니다.</h1>
          <a href="#member-management" class="button">회원관리</a>
          <a href="#member-delete" class="button">회원삭제</a>
      </div>
        `);
  } else {
    res.send(`<h1>일반페이지</h1>`);
  }
});
app.listen(port, () => {
  console.log(port + "서버가 동작하였습니다.");
});
