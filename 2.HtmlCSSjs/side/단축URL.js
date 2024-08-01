const dotenv = require("dotenv");
dotenv.config();
const nid = process.env.nid;
const npw = process.env.npw;

const request = require("request");
const query =
  "https://www.google.com/search?q=%EC%98%A4%EB%8A%98%EC%9D%98+%EB%82%A0%EC%94%A8&oq=%EC%98%A4%EB%8A%98%EC%9D%98+%EB%82%A0%EC%94%A8&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQLhiABDIHCAgQABiABDIHCAkQABiABNIBCTM2NzVqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8";
const url = `https://openapi.naver.com/v1/util/shorturl`;
const option = {
  url,
  form: { url: query },
  headers: {
    "X-Naver-Client-Id": nid,
    "X-Naver-Client-Secret": npw,
  },
};

request.post(option, (err, res, body) => {
  console.log(body);
});
