import Tasks from "./pages/tasks";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import MoveBoxes from "./pages/MoveBoxes";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import React from "react";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 嵌套路由 - Layout 作为页面框架 */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            {/* 默认首页 */}
            <Route path="tasks" element={<Tasks />} />

            {/* 普通路由 */}
            <Route path="drag-between-containers" element={<MoveBoxes />} />

            {/* 404 页面 */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
