import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import AccountPage from './pages/AccountPage';


import { ShoppingcartProvider } from "./context/ShoppingCartContext";
import Footer from "./components/Footer";
import "./App.css"; // Import the App.css file
function App() {
  return _jsx(ShoppingcartProvider, {
    children: _jsxs("div", {
      className: "site",
      children: [
        _jsx(Navbar, {}),
        _jsx(Container, {
          className: "mb-4",
          children: _jsxs(Routes, {
            children: [
              _jsx(Route, { path: "/", element: _jsx(Home, {}) }),
              _jsx(Route, { path: "/store", element: _jsx(Store, {}) }),
              _jsx(Route, { path: "/about", element: _jsx(About, {}) }),
              _jsx(Route, { path: "/account", element: _jsx(AccountPage, {}) }),
              
              
             
            ],
          }),
        }),
        _jsx(Footer, {}),
      ],
    }),
  });
}
export default App;
