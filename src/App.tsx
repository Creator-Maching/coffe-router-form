import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/TSLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Success from "./pages/Success";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="success" element={<Success />} />
      </Route>
    </Routes>
  );
}

export default App;
