import "react-bootstrap";

import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items.baseline mb-4">
          <span className="fs-2">{name} </span>

          <span className="ms-2 text-muted">{formatCurrency(price)} </span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button
              className="w-100 btn btn-primary"
              onClick={() => increaseCartQuantity(id)}
            >
              {" "}
              + Add to cart
            </button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <button
                  className="btn btn-primary"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </button>
                <div>
                  <span className="fs-3">{quantity}</span>. in cart
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </button>
              </div>
              <button
                className=" sm btn btn-danger"
                onClick={() => removeFromCart(id)}
              >
                {" "}
                Remove
              </button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
