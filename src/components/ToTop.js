import { useState, useEffect } from "react";
import { BsChevronDoubleUp } from "react-icons/bs";

const ToTop = ({ headerRef }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop >= 48) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const handleScrollToTop = () => {
    headerRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      className="scrollButton"
      onClick={handleScrollToTop}
      style={visible ? { display: "inline" } : { display: "none" }}
      aria-label="scroll to top"
    >
      <BsChevronDoubleUp />
    </button>
  );
};

export default ToTop;
