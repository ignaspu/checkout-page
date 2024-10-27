import Navigation from "../UI/Navigation/Navigation";
import OrderOverview from "../UI/OrderOverview/OrderOverview";
import Payment from "../UI/Payment/Payment";
import "../../css/media.scss";

const CheckOut = () => {
  return (
    <div className="layout">
      <Navigation />
      <main className="d-grid">
        <OrderOverview />
        <div className="d-flex gap-3 flex-column lside">
          <Payment />
        </div>
      </main>
    </div>
  );
};

export default CheckOut;
