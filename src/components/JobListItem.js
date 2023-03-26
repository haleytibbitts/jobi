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
          <img src={logo} alt={`The ${company} logo`} />
          <h3>{jobTitle}</h3>
        </div>
        <div className="typePoster">
          <p>{jobType}</p>
          <p>{`${datePosted} by ${company}`}</p>
        </div>
        <div className="locationCategory">
          <p>{location}</p>
          <p>{jobCategory}</p>
        </div>
      </Link>
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
