import { Outlet } from "react-router-dom";
import Navbar from "../nav/Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen min-w-screen">
      <div className="px-8 pt-4">
        <Navbar />
      </div>

      <div className="mx-auto max-w-7xl pt-16 px-16 sm:px-24 lg:px-48">
        <Outlet />
      </div>
    </div>
  );
}
