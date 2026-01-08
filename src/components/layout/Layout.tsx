import { Outlet } from "react-router-dom";
import Navbar from "../nav/Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <div className="px-8 pt-4">
        <Navbar />
      </div>

      <div className="mx-auto pt-16 px-4 md:px-16 xl:px-72">
        <Outlet />
      </div>
    </div>
  );
}
