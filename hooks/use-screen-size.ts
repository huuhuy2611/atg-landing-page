import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Initial screen size
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Event listener for window resize
    window.addEventListener("resize", handleScreenSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
