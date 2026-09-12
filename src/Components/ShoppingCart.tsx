import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import CartItem from "./CartItem";
import storeItems from "../Data/items.json";
import FormatCurrency from "../Utilities/FormatCurrency";

type ShoppingCartProps = {
  isOpen: boolean;
  isClosed:()=>void
};
const ShoppingCart = ({ isOpen, isClosed }: ShoppingCartProps) => {
  const { cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={isClosed} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}

          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0),
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
