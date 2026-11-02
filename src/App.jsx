import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialLoaderCleanup from "./components/InitialLoaderCleanup";
import Navbar from './components/Navbars.jsx';
import Footer from "./components/Footer.jsx";
import PageLoader from './pages/PageLoader.jsx'

import Home from "./pages/Home.jsx";
import AboutUs from "./pages/Aboutus.jsx";
import Menu from "./pages/MenuPage.jsx";
import Branches from "./pages/Branches.jsx";
import Franchise from "./pages/Franchise.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./styles/Home.css"

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
