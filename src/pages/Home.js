import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import storeItems from "../data/items.json";
import "./Home.css";
import { StoreItem } from "../components/StoreItem";
export function Home() {
  const featuredItemIds = [1, 6, 8, 12]; // IDs of featured items
  // Filter store items to include only the featured items
  const featuredItems = storeItems.filter((item) =>
    featuredItemIds.includes(item.id)
  );
  return _jsxs("div", {
    className: "main-container",
    children: [
     
      _jsx("div", {
        className: "home-bg",
        children: _jsxs(Container, {
          className: "home-content text-center",
          children: [
            _jsx("h1", {
              className: "home-title",
              children: "Welcome to Tech Shop",
            }),
            _jsx("p", {
              className: "home-description",
              children:
                "Explore our cutting-edge technology products and start shopping today!",
            }),
            _jsx(Link, {
              to: "/store",
              children: _jsx(Button, {
                variant: "primary",
                className: "home-button",
                children: "Shop Now",
              }),
            }),
          ],
        }),
      }),
      _jsxs(Container, {
        className: "mt-5",
        children: [
          _jsx("h2", {
            className: "section-title text-center",
            children: "Featured Products",
          }),
          _jsx(Row, {
            children: featuredItems.map((item) =>
              _jsx(
                Col,
                {
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 3,
                  children: _jsx(StoreItem, { ...item }),
                },
                item.id
              )
            ),
          }),
        ],
      }),
      _jsxs(Container, {
        className: "mt-5",
        children: [
          _jsx("h2", {
            className: "section-title text-center",
            children: "Discover More",
          }),
          _jsxs(Row, {
            children: [
              _jsx(Col, {
                xs: 12,
                md: 6,
                lg: 4,
                children: _jsx(Card, {
                  className: "mb-4 border border-light",
                  children: _jsxs(Card.Body, {
                    children: [
                      _jsx(Card.Title, { children: "Product Reviews" }),
                      _jsx(Card.Text, {
                        children:
                          "Read reviews and ratings from our satisfied customers. Make informed decisions before purchasing.",
                      }),
                      _jsx(Link, {
                        to: "/reviews",
                        children: _jsx(Button, {
                          variant: "dark",
                          children: "Read Reviews",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              _jsx(Col, {
                xs: 12,
                md: 6,
                lg: 4,
                children: _jsx(Card, {
                  className: "mb-4 border border-light ",
                  children: _jsxs(Card.Body, {
                    children: [
                      _jsx(Card.Title, { children: "Tech Blog" }),
                      _jsx(Card.Text, {
                        children:
                          "Explore our tech blog for the latest tech news, tips, and tutorials written by our experts.",
                      }),
                      _jsx(Link, {
                        to: "/blog",
                        children: _jsx(Button, {
                          variant: "dark",
                          children: "Read Blog",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              _jsx(Col, {
                xs: 12,
                lg: 4,
                children: _jsx(Card, {
                  className: "mb-4 border border-light",
                  children: _jsxs(Card.Body, {
                    children: [
                      _jsx(Card.Title, { children: "Subscribe to Newsletter" }),
                      _jsx(Card.Text, {
                        children:
                          "Stay updated with our latest product releases and exclusive offers. Subscribe to our newsletter.",
                      }),
                      _jsx(Link, {
                        to: "/newsletter",
                        children: _jsx(Button, {
                          variant: "dark",
                          children: "Subscribe",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
