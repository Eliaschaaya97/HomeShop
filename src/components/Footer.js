import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
function Footer() {
  return _jsx("footer", {
    className: "bg-dark text-white text-center py-3",
    children: _jsxs("div", {
      className: "container",
      children: [
        _jsxs("p", {
          children: ["\u00A9 ", new Date().getFullYear(), "Tech Shop"],
        }),
        _jsx("div", {
          className: "d-flex justify-content-center",
          children: _jsxs("ul", {
            className: "list-inline",
            children: [
              _jsx("li", {
                className: "list-inline-item",
                children: _jsx("a", {
                  href: "/contact",
                  children: "Contact Us",
                }),
              }),
              _jsx("li", { className: "list-inline-item", children: "|" }),
              _jsx("li", {
                className: "list-inline-item",
                children: _jsx("a", { href: "/about", children: "About Us" }),
              }),
              _jsx("li", { className: "list-inline-item", children: "|" }),
              _jsx("li", {
                className: "list-inline-item",
                children: _jsx("a", {
                  href: "/services",
                  children: "Services",
                }),
              }),
              _jsx("li", { className: "list-inline-item", children: "|" }),
              _jsx("li", {
                className: "list-inline-item",
                children: _jsx("a", { href: "/blog", children: "Blog" }),
              }),
              _jsx("li", { className: "list-inline-item", children: "|" }),
              _jsx("li", {
                className: "list-inline-item",
                children: _jsx("a", { href: "/career", children: "Career" }),
              }),
              _jsx("li", { className: "list-inline-item", children: "|" }),
              _jsx("li", {
                className: "list-inline-item",
                children: _jsx("a", { href: "/faq", children: "FAQ" }),
              }),
              _jsx("li", { className: "list-inline-item", children: "|" }),
              _jsx("li", {
                className: "list-inline-item",
                children: _jsxs("a", {
                  href: "#",
                  children: [
                    _jsx("i", { className: "fab fa-instagram" }),
                    " Instagram",
                  ],
                }),
              }),
              _jsx("li", { className: "list-inline-item", children: "|" }),
              _jsx("li", {
                className: "list-inline-item",
                children: _jsxs("a", {
                  href: "#",
                  children: [
                    _jsx("i", { className: "fab fa-facebook" }),
                    " Facebook",
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
export default Footer;
