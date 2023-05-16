import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import candidates from "../assets/candidates.png";
import { useState } from "react";

const WhyUs = () => {
  const [isFeature1Open, setIsFeature1Open] = useState(true);

  const handleFeature1Open = () => {
    setIsFeature1Open(!isFeature1Open);
  };

  return (
    <section className="whyUs">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Why choose us?</h2>
          <h3>World of talent at your fingertips</h3>
          <ul className="features">
            <li>
              <div
                className="aboveFold"
                onClick={handleFeature1Open}
                tabIndex="0"
              >
                <h4>Seamless Search</h4>
                {isFeature1Open ? (
                  <BsChevronUp aria-label="hide section" />
                ) : (
                  <BsChevronDown aria-label="show section" />
                )}
              </div>
              <p
                className="belowFold1"
                style={
                  isFeature1Open ? { display: "block" } : { display: "none" }
                }
              >
                It only takes 5 minutes. Set-up is smooth and simple, with fully
                customizable page design to reflect your brand.
              </p>
            </li>
            <li>
              <div
                className="aboveFold"
                onClick={handleFeature1Open}
                tabIndex="0"
              >
                <h4>Hire top talents</h4>
                {isFeature1Open ? <BsChevronDown /> : <BsChevronUp />}
              </div>
              <p
                className="belowFold2"
                style={
                  isFeature1Open ? { display: "none" } : { display: "block" }
                }
              >
                Jobi gives you access to the best talents in your field. Find
                your next star employee today.
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
        <div className="imgContainer">
          <img
            src={candidates}
            alt="Various colourful headshots of job seekers and graphics including: a search bar with the terms 'Designer, Brand, Logo' typed out, a processed payment to 'Escrow System' and a showcase of 18k+ candidates with the suggestion to add more"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
