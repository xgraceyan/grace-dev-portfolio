import { Outlet } from "react-router-dom";
import Navbar from "../nav/Navbar";
import ActiveBackground from "./ActiveBackground";

export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <ActiveBackground />

      <div className="relative z-10 px-8 pt-4">
        <Navbar />
      </div>

      <div className="relative z-10 mx-auto pt-16 px-4 md:px-16 xl:px-72">
        <Outlet />
      </div>
    </div>
  );
}
