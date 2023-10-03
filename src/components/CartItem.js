import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "react-bootstrap";
import { Stack } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
export function CartItem({ id, quantity }) {
    const { removeFromCart } = useShoppingCart(); // Corrected function name here
    const item = storeItems.find((i) => i.id === id);
    if (item == null)
        return null;
    return (_jsxs(Stack, { direction: "horizontal", gap: 2, children: [_jsx("img", { src: item.imgUrl, style: { width: "125px", height: "75px", objectFit: "cover" }, alt: item.name }), _jsxs("div", { className: "me-auto", children: [_jsxs("div", { children: [item.name, quantity > 1 && (_jsxs("span", { className: "text-muted", style: { fontSize: ".65rem" }, children: [" ", "x", quantity] }))] }), _jsxs("div", { className: "text-muted", style: { fontSize: ".75rem" }, children: [" ", formatCurrency(item.price)] })] }), _jsxs("div", { children: [" ", formatCurrency(item.price * quantity)] }), _jsx(Button, { variant: "outline-danger", size: "sm", onClick: () => removeFromCart(item.id), children: "\u00D7" })] }));
}
