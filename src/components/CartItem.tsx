import "react-bootstrap";
import { Stack } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { useShoppingCart } from "../context/ShoppingCartContext";

import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart(); // Corrected function name here
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt={item.name}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {" "}
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {" "}
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)} // Corrected function name here
      >
        &times;
      </Button>
    </Stack>
  );
}
