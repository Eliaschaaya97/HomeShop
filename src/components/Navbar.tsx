import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "./custom.css"; // Import your custom CSS file

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs className="bg-dark -sm mb-3 navbar-custom">
      <Container>
        {/* Add the Twins Tech name */}
        <NavbarBs.Brand as={NavLink} to="/" className="text-white">
          UNI Shop
        </NavbarBs.Brand>
        {/* End Twins Tech name */}
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" className="text-white">
            Home
          </Nav.Link>

          <Nav.Link as={NavLink} to="/store" className="text-white">
            Store
          </Nav.Link>

          <Nav.Link as={NavLink} to="/about" className="text-white">
            About
          </Nav.Link>

        
        
        </Nav>
        {cartQuantity > 0 && (
          <button
            onClick={openCart}
            className="btn btn-primary rounded-circle  justify-content-center align-items-center"
            style={{ width: "3rem", height: "3rem" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm0-3l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1v2h2l3.6 7.59L3.62 17H19v-2H7z" />
            </svg>

            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.3rem",
                height: "1.3rem",
                bottom: 0,
                right: 0,
                transform: "translate(25%,25%)",
              }}
            >
              {cartQuantity}
            </div>
          </button>
        )}
      </Container>
    </NavbarBs>
  );
}
