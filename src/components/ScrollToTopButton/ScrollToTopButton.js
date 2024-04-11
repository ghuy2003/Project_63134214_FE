import React, { useEffect, useRef, useState } from "react";
import { SMALLINT } from "sequelize";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <div>
    
  </div>;
};

export default ScrollToTopButton;
