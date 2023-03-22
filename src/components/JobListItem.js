import { BsBookmarkDash } from "react-icons/bs";
import { Link } from "react-router-dom";

const JobListItem = () => {
  return (
    <li className="job">
      <Link to={"/details/11"}>
        <div className="logoTitle">
          <img src="" alt="" />
          <h3>job title</h3>
        </div>
        <div className="typePoster">
          <p>employment type</p>
          <p>*date posted* by *company*</p>
        </div>
        <div className="locationCategory">
          <p>location</p>
          <p>job category</p>
        </div>
        <div className="btns">
          <button className="saveBtn">
            <BsBookmarkDash />
          </button>
          <button className="applyBtn">APPLY</button>
        </div>
      </Link>
    </li>
  );
};

export default JobListItem;
