import { BsChevronDown, BsListUl } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import categories from "../utilities/categories.json";
import JobListItem from "./JobListItem";

const JobListings = ({ jobs }) => {
  const getLocations = () => {
    const locationsOne = jobs.map((job) => {
      return job.location.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    });
    const locationsTwo = [...new Set(locationsOne)];
    return locationsTwo.sort();
  };

  return (
    <main className="jobListings">
      <div className="wrapper">
        <div className="filter">
          <div className="heading">
            <h2>Filter By</h2>
            <button>
              <BsChevronDown />
            </button>
          </div>
          <form>
            <div className="rowOne">
              <div className="keyword">
                <label htmlFor="keyWord">Keyword or Title</label>
                <input
                  type="text"
                  id="keyWord"
                  placeholder="Search by Keywords"
                />
                <FiSearch />
              </div>
              <div>
                <label htmlFor="categories">Categories</label>
                <select name="categories" id="categories">
                  <option value="">Select:</option>
                  {categories.map((category, index) => {
                    return (
                      <option value={category} key={category + index}>
                        {category}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label htmlFor="location">Location</label>
                <select name="location" id="location">
                  <option value="">Select:</option>
                  {getLocations().map((location, index) => {
                    return (
                      <option value={location} key={location + index}>
                        {location}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label htmlFor="english">English Fluency</label>
                <select name="english" id="english">
                  <option value="">Select:</option>
                  <option value="fluent">Fluent</option>
                  <option value="professional">Professional</option>
                  <option value="limited">Limited</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="rowTwo">
              <div className="type">
                <legend>Job Type:</legend>
                <ul className="inputs">
                  <li>
                    <input type="checkbox" name="fulltime" id="fulltime" />
                    <label htmlFor="fulltime">Fulltime</label>
                  </li>
                  <li>
                    <input type="checkbox" name="hourly" id="hourly" />
                    <label htmlFor="hourly">Hourly-Contract</label>
                  </li>
                  <li>
                    <input type="checkbox" name="parttime" id="parttime" />
                    <label htmlFor="parttime">{`Part-time (20hr/week)`}</label>
                  </li>
                  <li>
                    <input type="checkbox" name="fixed" id="fixed" />
                    <label htmlFor="fixed">Fixed-Price</label>
                  </li>
                </ul>
              </div>
              <div className="experience">
                <legend>Experience Level:</legend>
                <ul className="inputs">
                  <li>
                    <input type="checkbox" name="beginner" id="beginner" />
                    <label htmlFor="beginner">{`Beginner (1-3 yrs)`}</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="intermediate"
                      id="intermediate"
                    />
                    <label htmlFor="intermediate">{`Intermediate (1-5 yrs)`}</label>
                  </li>
                  <li>
                    <input type="checkbox" name="expert" id="expert" />
                    <label htmlFor="expert">{`Expert (1-10 yrs)`}</label>
                  </li>
                </ul>
              </div>
              <div className="range">
                <legend>Salary Range:</legend>
                <div>
                  <label htmlFor="salary">0 - 1000 USD</label>
                  <input
                    type="range"
                    name="salary"
                    id="salary"
                    min="0"
                    max="1000"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="resultsInfo">
          <p>
            All <span>{jobs.length}</span> jobs found
          </p>
          <div className="sort">
            <label htmlFor="sort">Sort:</label>
            <select name="sort" id="sort">
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="highestPaying">Highest Paying</option>
            </select>
            <button>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
        <ul className="listView">
          {jobs
            .slice(0)
            .reverse()
            .map((job) => {
              return <JobListItem job={job} />;
            })}
        </ul>
      </div>
    </main>
  );
};

export default JobListings;
