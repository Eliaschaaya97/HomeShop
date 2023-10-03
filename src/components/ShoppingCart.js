import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
export function Shoppingcart({ isOpen }) {
    const { closeCart, cartItems } = useShoppingCart();
    return (_jsxs(Offcanvas, { show: isOpen, onHide: closeCart, placement: "end", children: [_jsx(Offcanvas.Header, { closeButton: true, children: _jsx(Offcanvas.Title, { children: "Cart" }) }), _jsx(Offcanvas.Body, { children: _jsxs(Stack, { gap: 3, children: [cartItems.map((item) => (_jsx(CartItem, { ...item }, item.id))), _jsxs("div", { className: "ms-auto fw-bold fs-5", children: ["Total:", " ", formatCurrency(cartItems.reduce((total, cartItem) => {
                                    const item = storeItems.find((i) => i.id === cartItem.id);
                                    return total + (item?.price || 0) * cartItem.quantity;
                                }, 0))] })] }) })] }));
}
