import { BsBookmarkDash } from "react-icons/bs";

const JobListItem = () => {
  return (
    <li className="job">
      <div className="logoTitle">
        <img src="" alt="" />
        <h4>job title</h4>
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
    </li>
  );
};

export default JobListItem;
