import {
  BsChevronDown,
  BsChevronUp,
  BsFillCheckCircleFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const WhyUs = () => {
  return (
    <section className="whyUs">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Why choose us?</h2>
          <h3>World of talent at your fingertips</h3>
          <ul className="features">
            <li>
              <div className="aboveFold">
                <h4>Seamless Search</h4>
                <BsChevronUp />
              </div>
              <p className="belowFold">
                It only takes 5 minutes. Set-up is smooth and simple, with fully
                customizable page design to reflect your brand.
              </p>
            </li>
            <li>
              <div className="aboveFold">
                <h4>Seamless Search</h4>
                <BsChevronDown />
              </div>
              <p className="belowFold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                labore, fugiat magni maxime non soluta. Aut rem impedit id
                expedita.
              </p>
            </li>
            <li>
              <h4>Protected payments, every time</h4>
            </li>
          </ul>
          <Link to={"/about-us"}>
            <button>Learn more</button>
          </Link>
        </div>
        <ul className="graphicsContainer">
          <li className="fakeSearch">
            <p>Designer, Brand, Logo</p>
            <div>
              <BiSearch />
            </div>
          </li>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <div className="candidates">
              <p>18k+ candidates</p>
              <ul className="profiles">
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <BsFillPlusCircleFill />
                </li>
              </ul>
            </div>
            <img src="" alt="" />
            <div className="escrow">
              <BsFillCheckCircleFill />
              <div className="textContainer">
                <p>Payment</p>
                <p>Escrow System</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
