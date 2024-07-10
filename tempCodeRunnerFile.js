let list = `<h1>링크를 선택하세요</h1><h2><ul>`;
  title.forEach(
    (v, i) => (list += `<li><a href="/story?id=${i}">${v}</a></li>`)
  );
  list += `</ul></h2> ${arr[req.query.id] ?? "선택하세요"}`;
  res.send(list);