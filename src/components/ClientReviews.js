import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Testimonial from "./Testimonial";

const ClientReviews = () => {
  return (
    <section className="reviews">
      <div className="wrapper">
        <div className="sectionHeader">
          <h2>
            What do our clients<span>think of us?</span>
          </h2>
          <div className="btns">
            <button className="prevBtn">
              <BsArrowLeftShort />
            </button>
            <button className="nextBtn">
              <BsArrowRightShort />
            </button>
          </div>
        </div>
        <ul className="testimonials">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </ul>
      </div>
    </section>
  );
};

export default ClientReviews;
