import Logo from "../../../svg/Logo";
import ShoppingBag from "../../../svg/ShoppingBag";
import "./navigation.scss";

const Navigation = () => {
  return (
    <header>
      <nav className="d-flex p-3 justify-content-between align-items-center navBar mx-auto">
        <Logo />
        <ShoppingBag />
      </nav>
    </header>
  );
};

export default Navigation;
