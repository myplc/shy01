import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Css from "./pages/Ex06";
import Eff from "./pages/Ex07";
<<<<<<< HEAD
// import CSS from "./pages/Ex08";
// import CSS from "./pages/Ex09";
// import CSS from "./pages/Ex10";
=======
import FetchData from "./pages/Ex08";
import UseM from "./pages/Ex09";
import Table from "./pages/Ex10";
import Axi from "./pages/Ex11";
import Ref from "./pages/Ex12";
>>>>>>> 2668553 ('init')

function App() {
  return (
    <>
<<<<<<< HEAD
      <Link to="/">Home</Link> | <Link to="/ex06">예제6</Link> | <Link to="/ex07">예제7</Link> | <Link to="/ex06">예제8</Link> | <Link to="/ex06">예제6</Link> | <Link to="/ex06">예제6</Link>
=======
      <Link to="/">Home</Link> | <Link to="/ex06">예제6</Link> | <Link to="/ex07">예제7</Link> | <Link to="/ex08">예제8</Link> | <Link to="/ex09">예제9</Link> | <Link to="/ex10">예제10</Link> |{" "}
      <Link to="/ex11">예제11</Link> | <Link to="/ex12">예제12</Link>
>>>>>>> 2668553 ('init')
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ex06" element={<Css />} />
        <Route path="/ex07" element={<Eff />} />
<<<<<<< HEAD
        {/* <Route path="/ex08" element={<Inp />} /> */}
        {/* <Route path="/ex09" element={<Inp />} /> */}
        {/* <Route path="/ex10" element={<Inp />} /> */}
=======
        <Route path="/ex08" element={<FetchData />} />
        <Route path="/ex09" element={<UseM />} />
        <Route path="/ex10" element={<Table />} />
        <Route path="/ex11" element={<Axi />} />
        <Route path="/ex12" element={<Ref />} />
>>>>>>> 2668553 ('init')
      </Routes>
    </>
  );
}

export default App;
