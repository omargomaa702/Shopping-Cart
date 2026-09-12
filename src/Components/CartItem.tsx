import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import storeItems from "../Data/items.json";
import FormatCurrency from "../Utilities/FormatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCartQuantity } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (!item) return item;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt={item.name}
        width={125}
        height={75}
        style={{ objectFit: "cover" }}
      />

      <div className="d-flex align-items-center justify-content-between flex-grow-1">
        <div>
          {item.name}
          {quantity > 1 && (
            <span className="text-muted ms-1" style={{ fontSize: ".65rem" }}>
              {quantity}x
            </span>
          )}
        </div>

        <div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {FormatCurrency(item.price)}
          </div>

          <div>{FormatCurrency(item.price * quantity)}</div>

          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => removeFromCartQuantity(item.id)}
            className="fs-6"
          >
            &times;
          </Button>
        </div>
      </div>
    </Stack>
  );
};

export default CartItem;
