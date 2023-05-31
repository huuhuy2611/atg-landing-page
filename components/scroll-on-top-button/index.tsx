import { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.scss";
import Image from "next/image";
import { Typography } from "@mui/material";

const ScrollToTopButton = () => {
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
      <Image src="/images/up_arrow.png" width={40} height={40} alt="arrow" />
    </button>
  );
};

export default ScrollToTopButton;
