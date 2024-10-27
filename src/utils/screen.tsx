import { useState, useEffect } from "react";

const isDesktop = () => {
  return window.innerWidth >= 992;
};

const useIsDesktop = () => {
  const [isDesktopSize, setIsDesktopSize] = useState<boolean>(isDesktop());

  useEffect(() => {
    const handleResize = () => setIsDesktopSize(isDesktop());
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isDesktopSize;
};

export default useIsDesktop;
