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
            >
              {activeLeft ? <BsArrowLeft /> : <BsArrowLeftShort />}
            </button>
            <button
              className={activeRight ? "active" : "inactive"}
              onPointerEnter={handleActiveRight}
              onPointerLeave={handleActiveRight}
              onClick={handleCarouselRight}
            >
              {activeRight ? <BsArrowRight /> : <BsArrowRightShort />}
            </button>
          </div>
        </div>
        <div className="carousel">
          <ul className="jobs" style={{ left: `${carouselLocation}px` }}>
            <li>
              <Link to={"/jobs/1"}>
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
              <Link to={"/jobs/2"}>
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
              <Link to={"jobs/3"}>
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
              <Link to={"jobs/4"}>
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
              <Link to={"jobs/5"}>
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
              <Link to={"jobs/6"}>
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
              <Link to={"jobs/6"}>
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
