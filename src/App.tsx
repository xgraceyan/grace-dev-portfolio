import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
