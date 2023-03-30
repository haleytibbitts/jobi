import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

const BlogPreview = () => {
  return (
    <section className="blogPreview">
      <div className="wrapper">
        <div className="sectionHeader">
          <h2>Jobi Guides</h2>
          <Link to={"/blog"}>
            <p>{`Explore More >`}</p>
          </Link>
        </div>
        <ul className="blogPosts">
          <li>
            <Link to={"/blog/1"}>
              <div className="imgContainer">
                <img
                  src={blog1}
                  alt="Two people sitting in a coffee shop working on a laptop and laughing"
                />
              </div>
              <p>30 March, 2023</p>
              <h3>Challenge yourself and win the future.</h3>
              <p>
                In order to succeed in life, we must challenge ourselves
                regularly. In this post, we'll explore...
              </p>
              <BsArrowRight aria-label="see blog post" />
            </Link>
          </li>
          <li>
            <Link to={"/blog/2"}>
              <div className="imgContainer">
                <img
                  src={blog2}
                  alt="A person smiling and working on their laptop at a co-working space"
                />
              </div>
              <p>23 March, 2023</p>
              <h3>10 strategies for finding your dream job.</h3>
              <p>
                Finding the right job can be a daunting task, but it's
                achievable. These 10 strategies from a career...
              </p>
              <BsArrowRight aria-label="see blog post" />
            </Link>
          </li>
          <li>
            <Link to={"/blog/3"}>
              <div className="imgContainer">
                <img
                  src={blog3}
                  alt="A person in a comfy sweater working from home on their bed looking at their laptop"
                />
              </div>
              <p>16 March, 2023</p>
              <h3>Overcoming self-doubt in your career.</h3>
              <p>
                Self-doubt can be a major obstacle to achieving success in your
                career. Overcoming it takes...
              </p>
              <BsArrowRight aria-label="see blog post" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BlogPreview;
