import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const TrendingJobs = () => {
  return (
    <section className="trendingJobs">
      <div className="wrapper">
        <div className="sectionHeader">
          <h2>Trending Jobs</h2>
          <div className="btns">
            <button className="prevBtn">
              <BsArrowLeftShort />
            </button>
            <button className="nextBtn">
              <BsArrowRightShort />
            </button>
          </div>
        </div>
        <ul className="jobs">
          <li>
            <Link to={"/jobs/1"}>
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
                alt="A macbook on a table displaying a WordPress website."
              />
              <p>WordPress Development</p>
            </Link>
          </li>
          <li>
            <Link to={"/jobs/2"}>
              <img
                src="https://images.unsplash.com/photo-1528109901743-12b16e05eedf"
                alt="A close up of someone editing a video on a MacBook."
              />
              <p>Audio & Video Editing</p>
            </Link>
          </li>
          <li>
            <Link to={"jobs/3"}>
              <img
                src="https://images.unsplash.com/photo-1574852859542-1b41217a7815"
                alt="A person with headphones on drawing a product design."
              />
              <p>Product & Branding Design</p>
            </Link>
          </li>
          <li>
            <Link to={"jobs/4"}>
              <img
                src="https://images.unsplash.com/photo-1632406898177-95f7acd8854f"
                alt="A person sitting with their notebook open and their monthly budget open on their MacBook"
              />
              <p>Admin & Customer Support</p>
            </Link>
          </li>
          <li>
            <Link to={"jobs/5"}>
              <img
                src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555"
                alt="A person with headphones on sitting on chair and working at their MacBook"
              />
              <p>Quality Assurance Analysis</p>
            </Link>
          </li>
          <li>
            <Link to={"jobs/6"}>
              <img
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a"
                alt="A person with glasses sitting at their computer and looking at their smartphone"
              />
              <p>Social Media Management</p>
            </Link>
          </li>
          <li>
            <Link to={"jobs/6"}>
              <img
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e"
                alt="A person sitting at a table writing on notebook. On the table is a stack of books, a pile of polaroids, a MacBook, an iPad, a pair of glasses, and a cup of black coffee."
              />
              <p>Copywriting</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TrendingJobs;
