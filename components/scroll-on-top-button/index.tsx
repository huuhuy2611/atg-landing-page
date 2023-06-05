import { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.scss";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const ScrollToTopButton = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.pageYOffset > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${styles.scrollToTop} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
    >
      <Image
        src="/images/up_arrow.png"
        width={isMobile ? 32 : 40}
        height={isMobile ? 32 : 40}
        alt="arrow"
      />
    </button>
  );
};

export default ScrollToTopButton;
