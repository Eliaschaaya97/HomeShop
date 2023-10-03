import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "react-bootstrap";
import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
export function StoreItem({ id, name, price, imgUrl }) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, } = useShoppingCart();
    const quantity = getItemQuantity(id);
    return (_jsxs(Card, { className: "h-100", children: [_jsx(Card.Img, { variant: "top", src: imgUrl, height: "200px", style: { objectFit: "cover" } }), _jsxs(Card.Body, { className: "d-flex flex-column", children: [_jsxs(Card.Title, { className: "d-flex justify-content-between align-items.baseline mb-4", children: [_jsxs("span", { className: "fs-2", children: [name, " "] }), _jsxs("span", { className: "ms-2 text-muted", children: [formatCurrency(price), " "] })] }), _jsx("div", { className: "mt-auto", children: quantity === 0 ? (_jsxs("button", { className: "w-100 btn btn-primary", onClick: () => increaseCartQuantity(id), children: [" ", "+ Add to cart"] })) : (_jsxs("div", { className: "d-flex align-items-center flex-column", style: { gap: ".5rem" }, children: [_jsxs("div", { className: "d-flex align-items-center justify-content-center", style: { gap: ".5rem" }, children: [_jsx("button", { className: "btn btn-primary", onClick: () => decreaseCartQuantity(id), children: "-" }), _jsxs("div", { children: [_jsx("span", { className: "fs-3", children: quantity }), ". in cart"] }), _jsx("button", { className: "btn btn-primary", onClick: () => increaseCartQuantity(id), children: "+" })] }), _jsxs("button", { className: " sm btn btn-danger", onClick: () => removeFromCart(id), children: [" ", "Remove"] })] })) })] })] }));
}
