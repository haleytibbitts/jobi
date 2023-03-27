import { BsBookmarkDash } from "react-icons/bs";
import { Link } from "react-router-dom";

const JobListItem = ({ job }) => {
  const {
    logo,
    jobTitle,
    jobType,
    datePosted,
    company,
    location,
    jobCategory,
    id,
  } = job;

  return (
    <li className="job">
      <Link to={`/jobs/${id}`}>
        <div className="logoTitle">
          <div className="imgContainer">
            <img src={logo} alt={`The ${company} logo`} />
          </div>
          <h3>{jobTitle}</h3>
        </div>
      </Link>
      <div className="typePoster">
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
        <p className="poster">
          {`${datePosted} by `}
          <span>{company}</span>
        </p>
      </div>
      <div className="locationCategory">
        <p className="location">{location}</p>
        <p className="category">{jobCategory}</p>
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
