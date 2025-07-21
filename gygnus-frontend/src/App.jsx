import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import JewelryAssistant from "./components/JewelryAssistant";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <JewelryAssistant />
      </main>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
