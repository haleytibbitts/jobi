import { AiOutlineBank } from "react-icons/ai";
import { BiSlider } from "react-icons/bi";
import { BsVectorPen, BsBag, BsTelephone } from "react-icons/bs";
import { HiCode } from "react-icons/hi";
import { Link } from "react-router-dom";

const CatPreview = () => {
  return (
    <section className="catPreview">
      <div className="wrapper">
        <div className="sectionHeader">
          <h2>Most Demanding Categories.</h2>
          <Link to={"/categories"}>
            <p>{`Explore all fields >`}</p>
          </Link>
        </div>
        <ul className="categories">
          <li>
            <BsVectorPen />
            <p>UI/UX Design</p>
          </li>
          <li>
            <HiCode />
            <p>Development</p>
          </li>
          <li>
            <BsBag />
            <p>Marketing</p>
          </li>
          <li>
            <BsTelephone />
            <p>Telemarketing</p>
          </li>
          <li>
            <AiOutlineBank />
            <p>Accounting</p>
          </li>
          <li>
            <BiSlider />
            <p>Editing</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CatPreview;
