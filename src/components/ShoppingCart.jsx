import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

export function Shoppingcart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();

  const handleProceedToCheckout = () => {
    // Add logic to handle the checkout process
    // For now, you can simply log a message to the console
    console.log("Proceeding to checkout:", cartItems);
  };

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total:{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          <Button
            variant="dark" // Set the button variant to dark for a black color
            onClick={handleProceedToCheckout}
          >
            Proceed to Checkout
          </Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
