import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

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
                <img src="" alt="" />
              </div>
              <p>23 July, 2022</p>
              <h3>Challenge yourself and win the future.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                rerum dolorum, quod nihil numquam deleniti porro officiis
                itaque! Maxime numquam fuga quia odit? Expedita, veritatis! In
                iusto debitis eius praesentium.
              </p>
              <BsArrowRight />
            </Link>
          </li>
          <li>
            <Link to={"/blog/2"}>
              <div className="imgContainer">
                <img src="" alt="" />
              </div>
              <p>23 July, 2022</p>
              <h4>Challenge yourself and win the future.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                rerum dolorum, quod nihil numquam deleniti porro officiis
                itaque! Maxime numquam fuga quia odit? Expedita, veritatis! In
                iusto debitis eius praesentium.
              </p>
              <BsArrowRight />
            </Link>
          </li>
          <li>
            <Link to={"/blog/2"}>
              <div className="imgContainer">
                <img src="" alt="" />
              </div>
              <p>23 July, 2022</p>
              <h4>Challenge yourself and win the future.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                rerum dolorum, quod nihil numquam deleniti porro officiis
                itaque! Maxime numquam fuga quia odit? Expedita, veritatis! In
                iusto debitis eius praesentium.
              </p>
              <BsArrowRight />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BlogPreview;
