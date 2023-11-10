import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Navbar1 } from "./components/Navbar1";
import AccountPage from "./pages/AccountPage";
import Loginpage from "./pages/loginpage";
import { ShoppingcartProvider } from "./context/ShoppingCartContext";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <ShoppingcartProvider>
      <div className="site">
        <Routes>
          {/* Define a Route for each page */}
          <Route
            path="/"
            element={
              <>
              <Navbar1 />
              <Container className="mb-4">
                <Loginpage />
              </Container>
            </>


            }
          />
             <Route
            path="/Account"
            element={
              <>
              <Navbar1 />
              <Container className="mb-4">
                <AccountPage />
              </Container>
            </>


            }
          />
          <Route
            path="/store"
            element={
              <>
                <Navbar />
                <Container className="mb-4">
                  <Store />
                </Container>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <Container className="mb-4">
                  <About />
                </Container>
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Container className="mb-4">
                  <Home />
                </Container>
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </ShoppingcartProvider>
  );
}

export default App;
