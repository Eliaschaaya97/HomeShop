import { HashRouter as Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingcartProvider } from "./context/ShoppingCartContext";
import Footer from "./components/Footer";
import AccountPage from "./pages/AccountPage";
// Import the Dashboard component correctly



function App() {
  return (
    <ShoppingcartProvider>
      <div className="site">
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<AccountPage />} />
            {/* Add the Route for the Dashboard component */}
           
          </Routes>
        </Container>
        <Footer />
      </div>
    </ShoppingcartProvider>
  );
}

export default App;
