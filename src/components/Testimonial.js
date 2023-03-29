import { BsStarFill } from "react-icons/bs";

const Testimonial = ({ headline, review, name, location, img }) => {
  return (
    <li>
      <div className="flexContainer">
        <div className="title">
          <h3>{headline}</h3>
          <div className="rating">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
        </div>
        <p>{review}</p>
      </div>
      <div className="clientInfo">
        <div className="textContainer">
          <p className="name">
            {name}, <span>{location}</span>
          </p>
        </div>
        <div className="imgContainer">
          <img src={img} alt="Headshot of the reviewer" />
        </div>
      </div>
    </li>
  );
};

export default Testimonial;
