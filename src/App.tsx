import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingcartProvider } from "./context/ShoppingCartContext";
import Footer from "./components/Footer";
import "./App.css"; // Import the App.css file

function App() {
  return (
    <ShoppingcartProvider>
      <div className="site">
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/HomeShop" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </ShoppingcartProvider>
  );
}

export default App;
