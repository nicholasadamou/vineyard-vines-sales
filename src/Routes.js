import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "./components/Loading";

const MensPage = lazy(() => import("./routes/Mens"));
const WomensPage = lazy(() => import("./routes/Womens"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Navigate to="/mens-sale" replace />} />
        <Route path="/mens-sale" element={<MensPage />} />
        <Route path="/womens-sale" element={<WomensPage />} />
      </Routes>
    </Suspense>
  );
}
