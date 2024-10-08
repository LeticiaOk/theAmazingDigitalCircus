import { BrowserRouter, Route, Routes } from "react-router-dom";
import Announcement from "./components/Add";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Shopping from "./Pages/Shopping";

function App() {
  return (
    <>
      <BrowserRouter>
        <Announcement />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Shopping />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
