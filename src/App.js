import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import "./App.scss";
import React, { Suspense } from "react";
import NotFound from "./components/NotFound";
import Header from "./features/Photo/components/Header";

// Lazy Loading - Code Splitting
const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/photos/*" element={<Photo />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/photos" replace />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
