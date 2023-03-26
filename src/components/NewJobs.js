import JobListItem from "./JobListItem";
import { Link } from "react-router-dom";

const NewJobs = ({ jobs }) => {
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
          {jobs
            .slice(0)
            .reverse()
            .map((job, index) => {
              if (index < 5) {
                return <JobListItem job={job} />;
              }
            })}
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
