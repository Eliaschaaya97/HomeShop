import {
  jsx as _jsx,
  Fragment as _Fragment,
  jsxs as _jsxs,
} from "react/jsx-runtime";
import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";
export function Store() {
  return _jsxs(_Fragment, {
    children: [
      _jsx("h1", { children: "Store" }),
      _jsx(Row, {
        md: 2,
        xs: 1,
        lg: 3,
        className: "g-3",
        children: storeItems.map((item) =>
          _jsx(Col, { children: _jsx(StoreItem, { ...item }) }, item.id)
        ),
      }),
    ],
  });
}
