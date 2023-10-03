import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, createContext, useState } from "react";
import { Shoppingcart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/uselocalStorage";
const ShoppingcartContext = createContext({});
export function useShoppingCart() {
    return useContext(ShoppingcartContext);
}
export function ShoppingcartProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
    function getItemQuantity(id) {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }
    function increaseCartQuantity(id) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            }
            else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    else {
                        return item;
                    }
                });
            }
        });
    }
    function decreaseCartQuantity(id) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            }
            else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    else {
                        return item;
                    }
                });
            }
        });
    }
    function removeFromCart(id) {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.id !== id);
        });
    }
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    return (_jsxs(ShoppingcartContext.Provider, { value: {
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartItems,
            cartQuantity,
            openCart,
            closeCart,
        }, children: [children, _jsx(Shoppingcart, { isOpen: isOpen })] }));
}
