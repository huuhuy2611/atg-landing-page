import { useEffect, useState } from "react";

const useScreenOffset = () => {
  const [screenOffset, setScreenOffset] = useState({ offsetX: 0, offsetY: 0 });

  useEffect(() => {
    const handleScreenOffset = () => {
      setScreenOffset({
        offsetX: window.pageXOffset,
        offsetY: window.pageYOffset,
      });
    };

    // Initial screen scroll
    setScreenOffset({
      offsetX: window.pageXOffset,
      offsetY: window.pageYOffset,
    });

    // Event listener for window scroll
    window.addEventListener("scroll", handleScreenOffset);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScreenOffset);
    };
  }, []);

  return screenOffset;
};

export default useScreenOffset;
