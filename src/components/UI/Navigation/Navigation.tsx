import Logo from "../../svg/Logo";
import LogoWeb from "../../svg/LogoWeb";
import ShoppingBag from "../../svg/ShoppingBag";
import ShoppingBagWeb from "../../svg/ShoppingBagWeb";
import useIsDesktop from "../../utils/screen";
import "./navigation.scss";

const Navigation = () => {
  const isDesktopSize = useIsDesktop();

  return (
    <header>
      <nav className="d-flex p-3 justify-content-between align-items-center navBar">
        <div>{isDesktopSize ? <LogoWeb /> : <Logo />}</div>
        <div>{isDesktopSize ? <ShoppingBagWeb /> : <ShoppingBag />}</div>
      </nav>
    </header>
  );
};

export default Navigation;
