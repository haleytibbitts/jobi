import TopNav from "./TopNav";
import categories from "../utilities/categories.json";
import { useLocation, useParams } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";

const Header = ({ curJob }) => {
  const pathName = useLocation().pathname;

  const { id, jobTitle, datePosted, company } = curJob;

  return (
    <header>
      <TopNav />
      {pathName === "/" ||
      pathName === "/jobs" ||
      pathName === `/jobs/${id}` ? (
        <div className="wrapper">
          {pathName === "/" ? (
            <>
              <h1>
                Find & Hire Experts<span>for any job.</span>
              </h1>
              <p>
                Unlock your potential with quality jobs & earn from world
                leading brands.
              </p>
            </>
          ) : pathName === "/jobs" ? (
            <>
              <h1>Job Listings</h1>
              <p>We deliver blazing fast & string work solutions.</p>
            </>
          ) : (
            <>
              <h1 className="jobHeading">{jobTitle}</h1>
              <p className="jobSubHeading">
                {datePosted} by {company}
              </p>
            </>
          )}
          {pathName === `/jobs/${id}` ? (
            <div className="links">
              <button className="facebook">
                <FaFacebookF /> Facebook
              </button>
              <button className="twitter">
                <FaTwitter /> Twitter
              </button>
              <button className="copyLink">
                <BiLinkAlt /> Copy
              </button>
            </div>
          ) : (
            <form>
              <label htmlFor="keywordInput">
                Your job title, keyword or company?
              </label>
              <input type="text" id="keywordInput" />
              <label htmlFor="categorySelect">Category</label>
              <select name="categorySelect" id="categorySelect">
                {categories.map((category) => {
                  return (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  );
                })}
              </select>
              <button>Search</button>
            </form>
          )}
          {pathName === "/" ? (
            <ul className="headerStats">
              <li>
                30k+<span>Worldwide Clients</span>
              </li>
              <li>
                3%<span>Top Talents</span>
              </li>
              <li>
                12mil<span>Dollar Payout</span>
              </li>
            </ul>
          ) : undefined}
        </div>
      ) : undefined}
    </header>
  );
};

export default Header;
