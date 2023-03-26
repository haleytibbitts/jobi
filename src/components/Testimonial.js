import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Testimonial = () => {
  return (
    <li>
      <div className="title">
        <h3>Impressive!</h3>
        <div className="rating">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
        </div>
      </div>
      <p>One of the best place that I found experts. Highly recommended!</p>
      <div className="clientInfo">
        <div className="textContainer">
          <p className="name">Rashed Ka, </p>
          <p className="location">Dhaka</p>
        </div>
        <div className="imgContainer">
          <img src="" alt="" />
        </div>
      </div>
    </li>
  );
};

export default Testimonial;
