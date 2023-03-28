import {
  BsArrowLeft,
  BsArrowRight,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import Testimonial from "./Testimonial";
import reviewer1 from "../assets/reviewer1.jpg";
import reviewer2 from "../assets/reviewer2.jpg";
import reviewer3 from "../assets/reviewer3.jpg";
import { useState } from "react";

const ClientReviews = () => {
  const [activeLeft, setActiveLeft] = useState(false);
  const [activeRight, setActiveRight] = useState(false);
  const [carouselLocation, setCarouselLocation] = useState(0);

  const handleActiveLeft = () => {
    setActiveLeft(!activeLeft);
  };

  const handleActiveRight = () => {
    setActiveRight(!activeRight);
  };

  const handleCarouselLeft = () => {
    if (carouselLocation < 0) {
      const newLocation = carouselLocation + 570;
      setCarouselLocation(newLocation);
    }
  };

  const handleCarouselRight = () => {
    if (carouselLocation !== -570) {
      const newLocation = carouselLocation - 570;
      setCarouselLocation(newLocation);
    }
  };

  return (
    <section className="reviews">
      <div className="overlay">
        <div className="wrapper">
          <div className="sectionHeader">
            <h2>
              What do our clients<span>think of us?</span>
            </h2>
            <div className="btns">
              <button
                className={activeLeft ? "active" : "inactive"}
                onPointerEnter={handleActiveLeft}
                onPointerLeave={handleActiveLeft}
                onClick={handleCarouselLeft}
              >
                {activeLeft ? <BsArrowLeft /> : <BsArrowLeftShort />}
              </button>
              <button
                className={activeRight ? "active" : "inactive"}
                onPointerEnter={handleActiveRight}
                onPointerLeave={handleActiveRight}
                onClick={handleCarouselRight}
              >
                {activeRight ? <BsArrowRight /> : <BsArrowRightShort />}
              </button>
            </div>
          </div>
          <div className="carousel">
            <ul
              className="testimonials"
              style={{ left: `${carouselLocation}px` }}
            >
              <Testimonial
                headline="Impressive!"
                review="Great job board! Easy to use, quality listings, and helpful support."
                name="Rashed Ka"
                location="Dhaka"
                img={reviewer1}
              />
              <Testimonial
                headline="Top-Quality Candidates"
                review="One of the best places that I found experts. Highly recommend!"
                name="Zubayer Al Hasan"
                location="USA"
                img={reviewer2}
              />
              <Testimonial
                headline="Effortless Job Hunting"
                review="Excellent job board with user-friendly interface, accurate listings, and great customer support."
                name="Emily Johnson"
                location="Canada"
                img={reviewer3}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
