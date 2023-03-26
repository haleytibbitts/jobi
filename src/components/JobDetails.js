import { BiDollar } from "react-icons/bi";
import {
  BsBag,
  BsCheckCircleFill,
  BsCheckSquare,
  BsClock,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { useParams } from "react-router-dom";

const JobDetails = ({ jobs, curJob, setCurJob }) => {
  const { pageId } = useParams();

  setCurJob(jobs.find((job) => job.id === pageId));

  const {
    salary,
    expLvl,
    location,
    jobType,
    overview,
    website,
    jobTitle,
    company,
    payFreq,
  } = curJob;

  return (
    <main className="jobDetails">
      <ul className="jobStats">
        <li>
          <BiDollar />
          <div className="textContainer">
            <h2>Salary</h2>
            <p>
              {salary}
              {payFreq
                ? payFreq
                : jobType === "Fulltime"
                ? "/year"
                : jobType === "Fixed-Price"
                ? "/week"
                : "/hr"}
            </p>
          </div>
        </li>
        <li>
          <BsCheckSquare />
          <div className="textContainer">
            <h2>Expertise</h2>
            <p>
              {expLvl <= 3
                ? "Beginner"
                : expLvl >= 6
                ? "Expert"
                : "Intermediate"}
            </p>
          </div>
        </li>
        <li>
          <GoLocation />
          <div className="textContainer">
            <h2>Location</h2>
            <p>{location}</p>
          </div>
        </li>
        <li>
          <BsBag />
          <div className="textContainer">
            <h2>Job Type</h2>
            <p>{jobType}</p>
          </div>
        </li>
        <li>
          <BsClock />
          <div className="textContainer">
            <h2>Experience</h2>
            <p>{expLvl} years</p>
          </div>
        </li>
      </ul>
      <section>
        <h2>Overview</h2>
        <p>
          {overview} <a href={website}>Learn more here.</a>
        </p>
      </section>
      <section>
        <h2>Job Description</h2>
        <p>
          As {jobTitle} at {company}, you'll give form to ideas by being the
          voice and owner of product decisions. You'll drive the design
          direction, and then make it happen!
        </p>
        <p>
          We understand our responsibility to create a diverse, equitable, and
          inclusive place within the tech industry, while pushing to make our
          industry more representative.
        </p>
      </section>
      <section>
        <h2>Responsibilities</h2>
        <ul>
          <li>
            <BsCheckCircleFill />
            <p>
              Collaborate daily with a multidisciplinary team of Software
              Engineers, Researchers, Strategists, and Project Managers
            </p>
          </li>
          <li>
            <BsCheckCircleFill />
            <p>
              Lead ideation sessions, workshops, demos, and presentations with
              clients on-site
            </p>
          </li>
          <li>
            <BsCheckCircleFill />
            <p>
              Establish design schedules, ensure final visual design concepts
              are on-brand, on-budget, and deliver on product strategy goals.
            </p>
          </li>
          <li>
            <BsCheckCircleFill />
            <p>
              Collaborate with design peers to ensure designs are conceptually
              sound
            </p>
          </li>
          <li>
            <BsCheckCircleFill />
            <p>Ensure content strategy and design are aligned</p>
          </li>
          <li>
            <BsCheckCircleFill />{" "}
            <p>You’ll build cohesive and lightweight design systems</p>
          </li>
          <li>
            <BsCheckCircleFill />{" "}
            <p>
              Continuously iterate your designs to stay current with mobile
              trends
            </p>
          </li>
          <li>
            <BsCheckCircleFill />{" "}
            <p>
              Give and receive design critique to help constantly refine and
              push our work
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Required Skills:</h2>
        <ul>
          <li>
            <p>
              You’re a conceptual thinker that can translate customer needs,
              behaviors, and project requirements
            </p>
          </li>
          <li>
            <p>
              Experience effectively presenting and communicating your design
              decisions to clients and team members
            </p>
          </li>
          <li>
            <p>
              You’re knowledgeable of what’s possible on modern digital
              platforms in addition to an understanding of platform design
              standards
            </p>
          </li>
          <li>
            <p>
              You're empathetic to client needs and can help find solutions if
              problems arise
            </p>
          </li>
          <li>
            <p>A commitment to being a trusted mentor and thought leader</p>
          </li>
          <li>
            <p>
              You prefer face-to-face over remote interaction — and you know
              exactly when to get on a plane to present or solve issues with
              clients in person.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Benefits:</h2>
        <ul>
          <li>
            <p>We are a remote-first company.</p>
          </li>
          <li>
            <p>
              100% company-paid health insurance premiums for you & your
              dependents
            </p>
          </li>
          <li>
            <p>Vacation stipend</p>
          </li>
          <li>
            <p>Unlimited paid vacation and paid company holidays</p>
          </li>
          <li>
            <p>Monthly wellness/gym stipend</p>
          </li>
        </ul>
      </section>
      <button>Apply for this position</button>
    </main>
  );
};

export default JobDetails;
