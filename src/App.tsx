import { Route, Routes } from "react-router-dom";
import BoardPage from "./pages/boardPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BoardPage />} />
    </Routes>
  );
}
