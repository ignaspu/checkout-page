import { useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import product from "../../images/Product.png";
import "./orderoverview.css";
import Arrow from "../../svg/Arrow";
import useIsDesktop from "../../utils/screen";
import WhyChoose from "../PaymentForm/WhyChoose";

const OrderOverview = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(299.97);
  const [quantity, setQuantity] = useState<number>(3);
  const [productName, setProductName] = useState<string>(
    "LogoIpsum IPL + Warranty",
  );
  const isDesktopSize = useIsDesktop();

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
          <div className="overviewTotal">${price}</div>
        </div>
      )}
      <div className="rside">
        <Collapse in={open || isDesktopSize}>
          <div className="p-3 bgColor">
            <div className="d-flex justify-content-between align-items-center border-bottom border-top pt-3 pb-3 productOrder">
              <div className="d-flex align-items-center gap-3">
                <div className="productContainer">
                  <img src={product} alt="Product image" />
                  <div className="badgeQuantity badgeText">{quantity}</div>
                </div>

                <span className="product">{productName}</span>
              </div>
              <span>${price}</span>
            </div>

            <div className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-3">
              <span className="textName">Subtotal</span>
              <span className="textName">${price}</span>
            </div>

            <div className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-3 totalBorder">
              <span className="total">Total</span>
              <span className="total">${price}</span>
            </div>
          </div>
        </Collapse>
        {isDesktopSize && <WhyChoose />}
      </div>
    </>
  );
};

export default OrderOverview;
