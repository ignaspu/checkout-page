import Navigation from "../../UI/Navigation/Navigation";
import OrderOverview from "../../UI/OrderOverview/OrderOverview";
import Payment from "../../UI/PaymentForm/Payment";
import "./checkout.scss";

const CheckOut = () => {
  return (
    <>
      <Navigation />
      <div className="desktopLayout">
        <OrderOverview />
        <div className="d-flex gap-3 flex-column leftSidePanel">
          <Payment />
        </div>
      </div>
    </>
  );
};

export default CheckOut;
