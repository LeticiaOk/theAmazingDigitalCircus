import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Shopping from "./Pages/Store";

function App() {
  return (
    <>
      <BrowserRouter>
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
