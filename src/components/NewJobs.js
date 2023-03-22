import JobListItem from "./JobListItem";
import SectionHeader from "./SectionHeader";

const NewJobs = () => {
  return (
    <section className="newJobs">
      <div className="wrapper">
        <SectionHeader
          headerText="New job listing"
          linkText="Explore all jobs"
        />
        <ul className="jobs">
          <JobListItem />
          <JobListItem />
          <JobListItem />
          <JobListItem />
          <JobListItem />
        </ul>
        <p className="postJob">
          Do you want to post a job for your company? <span>We can help. </span>
          <a href="">Click here</a>
        </p>
      </div>
    </section>
  );
};

export default NewJobs;
