import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "./custom.css"; // Import your custom CSS file

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return _jsx(NavbarBs, {
    className: "bg-dark -sm mb-3 navbar-custom",
    children: _jsxs(Container, {
      children: [
        _jsx(NavbarBs.Brand, {
          as: NavLink,
          to: "/",
          className: "text-white",
          children: "UNI Shop",
        }),
        _jsxs(Nav, {
          className: "me-auto",
          children: [
            _jsx(Nav.Link, {
              as: NavLink,
              to: "/",
              className: "text-white",
              children: "Home",
            }),
            _jsx(Nav.Link, {
              as: NavLink,
              to: "/store",
              className: "text-white",
              children: "Store",
            }),
            _jsx(Nav.Link, {
              as: NavLink,
              to: "/about",
              className: "text-white",
              children: "About",
            }),
            // Add the User link
            // _jsx(Nav.Link, {
            //   as: NavLink,
            //   to: "/account",
            //   className: "text-white",
            //   children: "User",
            // }),
          ],
        }),
        cartQuantity > 0 &&
          _jsxs("button", {
            onClick: openCart,
            className:
              "btn btn-primary rounded-circle  justify-content-center align-items-center",
            style: { width: "3rem", height: "3rem" },
            children: [
              _jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                children: _jsx("path", {
                  d: "M17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm0-3l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1v2h2l3.6 7.59L3.62 17H19v-2H7z",
                }),
              }),
              _jsx("div", {
                className:
                  "rounded-circle bg-danger d-flex justify-content-center align-items-center",
                style: {
                  color: "white",
                  width: "1.3rem",
                  height: "1.3rem",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%,25%)",
                },
                children: cartQuantity,
              }),
            ],
          }),
      ],
    }),
  });
}
