import { BsBookmarkDash } from "react-icons/bs";
import { Link } from "react-router-dom";

const JobGridItem = ({ job }) => {
  const { logo, jobTitle, jobType, location, salary, company, id } = job;

  return (
    <li className="job">
      <div className="logoSave">
        <div className="imgContainer">
          <img src={logo} alt={`The ${company} logo`} />
        </div>
        <button className="saveBtn">
          <BsBookmarkDash />
        </button>
      </div>
      <div className="typeTitle">
        <p
          className={
            jobType === "Fulltime"
              ? "fullTime"
              : jobType === "Part Time"
              ? "partTime"
              : jobType === "Hourly-Contract"
              ? "hourly"
              : "fixed"
          }
        >
          {jobType}
        </p>
        <Link to={`/jobs/${id}`}>
          <h3>{jobTitle}</h3>
        </Link>
        <p className="salary">
          {salary}
          <span>
            {jobType === "Fulltime"
              ? " / Yearly"
              : jobType === "Fixed-Price"
              ? " (Fixed)"
              : " / Hourly"}
          </span>
        </p>
      </div>
      <div className="locationApply">
        <p className="location">{location}</p>
        <button className="applyBtn">APPLY</button>
      </div>
    </li>
  );
};

export default JobGridItem;
