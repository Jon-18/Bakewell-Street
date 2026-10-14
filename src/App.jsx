
import "./styles/Home.css"
import Navbar from './components/Navbars.jsx'
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Menu from "./pages/MenuPage";
import Branches from "./pages/Branches";
import Franchise from "./pages/Franchise";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/franchise" element={<Franchise />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
