import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const TopBrands = () => {
  return (
    <section className="topBrands">
      <div className="wrapper">
        <div className="imgContainer">
          <img src="" alt="" />
          <Logo />
        </div>
        <div className="textContainer">
          <div className="header">
            <h2>top brand</h2>
            <h3>
              Collaboration with<span>Top Brands.</span>
            </h3>
          </div>
          <p>
            We collaborate with a number of top tier companies on imagining the
            future of work, have a look.
          </p>
          <Link to={"/companies"}>
            <p>
              Learn More <BsArrowRight />
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
