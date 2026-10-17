import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialLoaderCleanup from "./components/InitialLoaderCleanup";
import Navbar from './components/Navbars.jsx';
import Footer from "./components/Footer";
import PageLoader from './pages/PageLoader.jsx'

import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Menu from "./pages/MenuPage";
import Branches from "./pages/Branches";
import Franchise from "./pages/Franchise";
import NotFound from "./pages/NotFound";

import "./styles/home.css"

function App() {

  return (
    <BrowserRouter>
      <InitialLoaderCleanup />
      <PageLoader />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
