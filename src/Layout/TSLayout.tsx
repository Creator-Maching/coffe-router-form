import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import "../App.css";


export default function Layout() {
  return (
    <div className="layoutStyle">
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}