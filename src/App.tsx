import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import Projects from "./components/projects/Projects";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}
