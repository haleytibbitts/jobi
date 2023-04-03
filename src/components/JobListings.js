import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { BsChevronDown, BsChevronUp, BsGridFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import categories from "../utilities/categories.json";
import JobListItem from "./JobListItem";
import JobGridItem from "./JobGridItem";
import Pagination from "./Pagination";

const JobListings = ({ jobs, filteredJobs, isMobile }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const listingsRef = useRef(null);

  const getLocations = () => {
    const locationsOne = jobs.map((job) => {
      return job.location.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    });
    const locationsTwo = [...new Set(locationsOne)];
    return locationsTwo.sort();
  };

  const [isList, setIsList] = useState(true);

  const handleIsList = () => {
    setIsList(!isList);
  };

  const [sortView, setSortView] = useState({
    latest: true,
    oldest: false,
  });

  const handleSortView = (e) => {
    let sortObject = {
      latest: true,
      oldest: false,
    };

    if (e.target.value === "oldest") {
      sortObject = {
        latest: false,
        oldest: true,
      };
    }

    setSortView(sortObject);
  };

  const [isFilterOut, setIsFilterOut] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const PageSize = 12;

  const curTableData = useMemo(() => {
    let jobsLatest = [];

    if (filteredJobs.length) {
      jobsLatest = filteredJobs.slice(0);
    } else {
      jobsLatest = jobs.slice(0);
    }

    if (sortView.latest) {
      jobsLatest = jobsLatest.reverse();
    }

    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return jobsLatest.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredJobs, jobs, sortView]);

  return (
    <main className="jobListings">
      <div className="wrapper">
        <div
          className="filter"
          style={
            isFilterOut
              ? {
                  paddingBottom: "30px",
                }
              : { paddingBottom: "10px" }
          }
        >
          <div
            className="heading"
            style={
              isFilterOut
                ? {
                    borderBottom: "border-bottom: 2px solid #e0e8e5",
                  }
                : { borderBottom: "none" }
            }
          >
            <h2>Filter By</h2>
            <button
              onClick={() => {
                setIsFilterOut(!isFilterOut);
              }}
            >
              {isFilterOut ? <BsChevronUp /> : <BsChevronDown />}
            </button>
          </div>
          {isFilterOut ? (
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
          ) : undefined}
        </div>
        <div className="resultsInfo" ref={listingsRef}>
          <p>
            All{" "}
            <span>
              {filteredJobs.length ? filteredJobs.length : jobs.length}
            </span>{" "}
            jobs found
          </p>
          <div className="sort">
            <label htmlFor="sort">Sort:</label>
            <select name="sort" id="sort">
              <option value="latest" onClick={handleSortView}>
                Latest
              </option>
              <option value="oldest" onClick={handleSortView}>
                Oldest
              </option>
            </select>
            {!isMobile ? (
              <button onClick={handleIsList} aria-label="list/grid view toggle">
                {isList ? <BsGridFill /> : <GiHamburgerMenu />}
              </button>
            ) : null}
          </div>
        </div>
        <ul
          className={
            isMobile || !isList ? "gridView listings" : "listView listings"
          }
        >
          {isMobile || !isList
            ? curTableData.map((job) => {
                return <JobGridItem job={job} />;
              })
            : curTableData.map((job) => {
                return <JobListItem job={job} />;
              })}
        </ul>
        <Pagination
          onPageChange={(page) => {
            setCurrentPage(page);
            listingsRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
          totalCount={filteredJobs.length ? filteredJobs.length : jobs.length}
          currentPage={currentPage}
          pageSize={PageSize}
        />
      </div>
    </main>
  );
};

export default JobListings;
