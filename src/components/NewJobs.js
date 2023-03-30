import JobListItem from "./JobListItem";
import { Link } from "react-router-dom";
import JobGridItem from "./JobGridItem";

const NewJobs = ({ jobs }) => {
  return (
    <section className="newJobs">
      <div className="wrapper">
        <div className="sectionHeader">
          <h2>New job listings</h2>
          <Link to={"/jobs"}>
            <p>{`Explore all jobs >`}</p>
          </Link>
        </div>
        <ul
          className={
            window.innerWidth < 769 ? "gridView listings" : "listView listings"
          }
        >
          {window.innerWidth < 769
            ? jobs
                .slice(0)
                .reverse()
                .map((job, index) => {
                  if (index < 5) {
                    return <JobGridItem job={job} key={index + job.id} />;
                  }
                })
            : jobs
                .slice(0)
                .reverse()
                .map((job, index) => {
                  if (index < 5) {
                    return <JobListItem job={job} key={index + job.id} />;
                  }
                })}
        </ul>
        <div className="flexContainer">
          <p className="postJob">
            Do you want to post a job for your company?{" "}
            <span>We can help. </span>
            <Link to={"/post"}>Click here</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewJobs;
