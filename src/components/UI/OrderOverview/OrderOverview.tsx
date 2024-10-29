import { useContext, useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import "./orderoverview.css";
import Arrow from "../../../svg/Arrow";
import useIsDesktop from "../../../utils/screen";
import WhyChoose from "../WhyChoose/WhyChoose";
import { ProductContext } from "../../../context/ProductContext";

const OrderOverview = () => {
  const context = useContext(ProductContext);
  const isDesktopSize = useIsDesktop();
  const [open, setOpen] = useState<boolean>(false);

  if (!context) {
    return null;
  }

  const { products, totalAmount } = context;

  return (
    <>
      {!isDesktopSize && (
        <div
          className={`d-flex justify-content-between align-items-center bgColor p-3`}
        >
          <div className="d-flex align-items-center gap-1">
            <h5 className="mb-0 textName">Order Overview</h5>
            <Button
              variant="link"
              onClick={() => setOpen(!open)}
              className="p-0"
            >
              <Arrow open={open} />
            </Button>
          </div>
          <div className="overviewTotal">${totalAmount.toFixed(2)}</div>
        </div>
      )}
      <div className="rside">
        <Collapse in={open || isDesktopSize}>
          <div className="p-3 bgColor">
            {products.map((product) => (
              <div
                key={product.id}
                className="d-flex justify-content-between align-items-center border-bottom border-top pt-3 pb-3 productOrder"
              >
                <div className="d-flex align-items-center gap-3">
                  <div className="productContainer">
                    <img src={product.image} alt={product.name} />
                    <div className="badgeQuantity badgeText">
                      {product.quantity}
                    </div>
                  </div>
                  <span className="product">{product.name}</span>
                </div>
                <span>${(product.price * product.quantity).toFixed(2)}</span>
              </div>
            ))}

            <div className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-3">
              <span className="textName">Subtotal</span>
              <span className="textName">${totalAmount.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-3 totalBorder">
              <span className="total">Total</span>
              <span className="total">${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </Collapse>
        {isDesktopSize && <WhyChoose />}
      </div>
    </>
  );
};

export default OrderOverview;
