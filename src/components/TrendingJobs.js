import {
  BsArrowLeft,
  BsArrowRight,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const TrendingJobs = () => {
  const [activeLeft, setActiveLeft] = useState(false);
  const [activeRight, setActiveRight] = useState(false);
  const [carouselLocation, setCarouselLocation] = useState(0);

  const handleActiveLeft = () => {
    setActiveLeft(!activeLeft);
  };

  const handleActiveRight = () => {
    setActiveRight(!activeRight);
  };

  const handleCarouselLeft = () => {
    if (carouselLocation < 0) {
      const newLocation = carouselLocation + 280;
      setCarouselLocation(newLocation);
    }
  };

  const handleCarouselRight = () => {
    if (carouselLocation !== -840) {
      const newLocation = carouselLocation - 280;
      setCarouselLocation(newLocation);
    }
  };

  return (
    <section className="trendingJobs">
      <div className="wrapper">
        <div className="sectionHeader">
          <h2>Trending Jobs</h2>
          <div className="btns">
            <button
              className={activeLeft ? "active" : "inactive"}
              onPointerEnter={handleActiveLeft}
              onPointerLeave={handleActiveLeft}
              onClick={handleCarouselLeft}
              aria-label="previous job"
            >
              {activeLeft ? <BsArrowLeft /> : <BsArrowLeftShort />}
            </button>
            <button
              className={activeRight ? "active" : "inactive"}
              onPointerEnter={handleActiveRight}
              onPointerLeave={handleActiveRight}
              onClick={handleCarouselRight}
              aria-label="next job"
            >
              {activeRight ? <BsArrowRight /> : <BsArrowRightShort />}
            </button>
          </div>
        </div>
        <div className="carousel">
          <ul className="jobs" style={{ left: `${carouselLocation}px` }}>
            <li>
              <Link to={"/jobs/700ca22a-af85-4695-97d4-5960ad797651"}>
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
                  alt="A macbook on a table displaying a WordPress website."
                />
                <div className="overlay">
                  <p>WordPress Development</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/jobs/8b47dded-ae15-455f-9ce5-485a0302a10f"}>
                <img
                  src="https://images.unsplash.com/photo-1528109901743-12b16e05eedf"
                  alt="A close up of someone editing a video on a MacBook."
                />
                <div className="overlay">
                  <p>
                    Audio & <span>Video Editing</span>
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"jobs/67eb5456-711b-4d18-9985-f780afe0f50b"}>
                <img
                  src="https://images.unsplash.com/photo-1574852859542-1b41217a7815"
                  alt="A person with headphones on drawing a product design."
                />
                <div className="overlay">
                  <p>
                    Product & <span>Branding Design</span>
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"jobs/1d396c21-e421-4dd9-988e-55a8200c6e10"}>
                <img
                  src="https://images.unsplash.com/photo-1632406898177-95f7acd8854f"
                  alt="A person sitting with their notebook open and their monthly budget open on their MacBook"
                />
                <div className="overlay">
                  <p>
                    Admin & <span>Customer Support</span>
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"jobs/2e1ec733-dc1d-44ee-bf87-ba592e6e6efb"}>
                <img
                  src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555"
                  alt="A person with headphones on sitting on chair and working at their MacBook"
                />
                <div className="overlay">
                  <p>Quality Assurance Analysis</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"jobs/f76fc3d7-59b5-4cc0-b23c-7a31065ccefb"}>
                <img
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a"
                  alt="A person with glasses sitting at their computer and looking at their smartphone"
                />
                <div className="overlay">
                  <p>Social Media Management</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"jobs/2d24f087-0a9b-4a69-b317-71f5faf20a8c"}>
                <img
                  src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e"
                  alt="A person sitting at a table writing on notebook. On the table is a stack of books, a pile of polaroids, a MacBook, an iPad, a pair of glasses, and a cup of black coffee."
                />
                <div className="overlay">
                  <p>Copywriting</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrendingJobs;
