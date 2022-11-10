import productApi from "api/productApi";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import NotFound from "./components/NotFound";
import Header from "./features/Photo/components/Header";

// Lazy Loading - Code Splitting
const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductUrl = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        setProductList(response.data);
      } catch (error) {
        console.log("Fail to fetch", error);
      }
    };
    fetchProductUrl();
  }, []);
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
