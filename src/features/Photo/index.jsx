import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import AddEditPage from "./pages/AddEdit";
import NotFound from "../../components/NotFound";
function Photo() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/add" element={<AddEditPage />} />
      <Route path="/:photoId" element={<AddEditPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Photo;
