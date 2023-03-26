import { BsArrowRight } from "react-icons/bs";
import error from "../assets/error.svg";

const Error = () => {
  return (
    <section className="error">
      <div className="imgContainer">
        <img src={error} alt="" />
      </div>
      <div className="textContainer">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The jobi team is still hard at work curating more special features.
          Check back soon!
        </p>
        <button>
          Go Back <BsArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Error;
