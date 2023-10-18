import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Item from "./pages/Item";
import Item2 from "./pages/Item2";
import Item3 from "./pages/Item3";
import ErrorPage from "./pages/ErrorPage";
import Serum from "./pages/Serum";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item1" element={<Item />} />
          <Route path="/item2" element={<Item2 />} />
          <Route path="/item3" element={<Item3 />} />
          <Route path="/serum" element={<Serum />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
