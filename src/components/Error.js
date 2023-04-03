import { BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import error from "../assets/error.svg";
import { useLayoutEffect } from "react";

const Error = () => {
  console.log(useNavigate());

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section className="error">
      <div className="wrapper">
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
          <Link to={-1}>
            <button>
              Go Back <BsArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
