import { Col, Row } from "react-bootstrap";
import storeItems from "../Data/items.json";
import StoreItem from "../Components/StoreItem";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => {
          return <Col key={item.id}>
            <StoreItem {...item}/>
          </Col>;
        })}
      </Row>
    </>
  );
};

export default Store;
