import { BsFillPlayCircleFill } from "react-icons/bs";
import profile from "../assets/Profile.svg";
import document from "../assets/Document.svg";
import edit from "../assets/Edit.svg";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className="getStarted">
      <div className="wrapper">
        <div className="flexContainer">
          <BsFillPlayCircleFill />
          <h2>
            Let's get started
            <span>
              It's <span>simple.</span>
            </span>
          </h2>
          <p>
            Get access to our top 1% talent as well as a complete set of hybrid
            workforce management tools.
          </p>
        </div>
        <ul className="steps">
          <li>
            <div className="icon">
              <img src={profile} alt="profile icon" />
              <div className="textContainer">
                <p>It takes 2 minutes to open an account.</p>
                <Link to={"/register"}>
                  <p>open account</p>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="icon">
              <img src={document} alt="document icon" />
              <div className="textContainer">
                <p>Find talents or search your desire work.</p>
                <Link to={"/candidates"}>
                  <p>apply or hire</p>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="icon">
              <img src={edit} alt="edit icon" />
              <div className="textContainer">
                <p>Get your work done quickly with jobi.</p>
                <Link to={"/pricing"}>
                  <p>payment method</p>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default GetStarted;
