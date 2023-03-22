import JobListItem from "./JobListItem";
import { Link } from "react-router-dom";

const NewJobs = () => {
  return (
    <section className="newJobs">
      <div className="wrapper">
        <div className="sectionHeader">
          <h2>New job listing</h2>
          <Link to={"/jobs"}>
            <p>{`Explore all jobs >`}</p>
          </Link>
        </div>
        <ul className="jobs">
          <JobListItem />
          <JobListItem />
          <JobListItem />
          <JobListItem />
          <JobListItem />
        </ul>
        <p className="postJob">
          Do you want to post a job for your company? <span>We can help. </span>
          <Link to={"/post"}>Click here</Link>
        </p>
      </div>
    </section>
  );
};

export default NewJobs;
