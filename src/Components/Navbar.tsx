import { Button, Navbar as NavbarBs, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../Context/ShoppingCartContext";


const Navbar = () => {

  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3 ">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/Home" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/Store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/About" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button onClick={openCart}>
          <i className="bi bi-cart "></i>

          <div className="d-flex justify-content-center-align-items-center text-center position-relative">
            <span
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 13,
                left: 10,
                // transform: "translate(25%,-25%)",
              }}
              className="bg-danger rounded-circle"
            >
              {cartQuantity}
            </span>
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
