import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return _jsx("footer", {
    className: "bg-dark text-white text-center py-3",
    children: _jsxs("div", {
      className: "container",
      children: [
        _jsxs("p", {
          children: ["\u00A9 ", new Date().getFullYear(), " Tech Shop"],
        }),
        _jsx("div", {
          className: "d-flex justify-content-center",
          children: _jsxs("ul", {
            className: "list-inline",
            children: [
              _jsx("li", {
                className: "list-inline-item",
               
                children: _jsx("a", {
                    href: "https://liu.edu.lb/NewLIU2022/",
                  children: "Contact Us",
                }),
              }),
              _jsx("li", { className: "list-inline-item", children: "|" }),
              _jsx("li", {
                className: "list-inline-item",
                children: _jsx(Link, { to: "/about", children: "About Us" }), // Use Link to navigate to the "About" page
              }),
              _jsx("li", { className: "list-inline-item", children: "|" }),
              // ... Other links
              _jsxs("a", {
                href: "https://www.instagram.com/lebintuni/?hl=en", // Updated Instagram URL
                children: [
                  _jsx(FontAwesomeIcon, { icon: faInstagram  }),
                  " Instagram ",
                ],
              }),
              _jsx("li", { className: "list-inline-item", children: " |" }),
              _jsxs("a", {
                href: "https://www.facebook.com/lebintuni/", // Updated Facebook URL
                children: [
                  _jsx(FontAwesomeIcon, { icon: faFacebook }),
                  " Facebook",
                ],
              }),
              
            ],
          }),
        }),
      ],
    }),
  });
}

export default Footer;
