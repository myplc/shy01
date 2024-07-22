const express = require("express");
const app = express();
const port = 3000;
app.use("/", express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/풀이e003.html");
});
app.get("/gugu", (req, res) => {
  let list = `
      <!DOCTYPE html>
      <html lang="ko">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="/풀이e103.css"></head>
          <body>
            <h1>구구단</h1>
            <form action="/gugu">
            <select name="gugu">
            <option value="0">전체</option>`;

  for (let i = 2; i <= 9; i++) list += `<option value="${i}">${i}단</option>`;

  list += `</select><input type="submit" value="확인"></form><table><tr>`;

  const gugu = req.query.gugu;
  list += `<th>X</th>`;
  for (let k = 2; k <= 9; k++) {
    list += `<th>${k}단</th>`;
  }
  list += `</tr>`;

  for (let j = 1; j <= 9; j++) {
    list += `<tr><td>${j}</td>`;
    for (let i = 2; i <= 9; i++) {
      if (gugu == i) {
        list += `<td style="background-color:rgb(233, 233, 77);">`;
      } else {
        list += `<td>`;
      }
      list += `${i} x ${j} = ${i * j}</td>`;
    }
    list += `</tr>`;
  }

  list += `</table></body></html>`;
  res.send(list);
});

app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));
