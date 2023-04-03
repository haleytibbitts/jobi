import TopNav from "./TopNav";
import categories from "../utilities/categories.json";
import { useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BiChevronDown, BiChevronUp, BiLinkAlt } from "react-icons/bi";
import { useState } from "react";

const Header = ({
  curJob,
  jobs,
  setFilteredJobs,
  isDropDown,
  setIsDropDown,
  handleDropDown,
  headerRef,
  isTablet,
  isMobile,
}) => {
  const pathName = useLocation().pathname;

  const { id, jobTitle, datePosted, company, facebook, twitter } = curJob;

  const [selectValue, setSelectValue] = useState("");
  const [keywordValue, setKeywordValue] = useState("");

  const handleSelectValue = (e) => {
    setSelectValue(e.target.innerText);
  };

  const handleKeywordValue = (e) => {
    setKeywordValue(e.target.value);
  };
  const navigate = useNavigate();

  const getJobs = () => {
    const jobArray = jobs.filter((job) => {
      if (
        job.jobCategory === selectValue &&
        (job.company.toLowerCase().includes(keywordValue.toLowerCase()) ||
          job.jobTitle.toLowerCase().includes(keywordValue.toLowerCase()) ||
          job.overview.toLowerCase().includes(keywordValue.toLowerCase()))
      ) {
        return job;
      } else if (
        selectValue === "" &&
        (job.company.toLowerCase().includes(keywordValue.toLowerCase()) ||
          job.jobTitle.toLowerCase().includes(keywordValue.toLowerCase()) ||
          job.overview.toLowerCase().includes(keywordValue.toLowerCase()))
      ) {
        return job;
      } else if (job.jobCategory === selectValue && keywordValue === "") {
        return job;
      }
    });

    setFilteredJobs(jobArray);
    setIsDropDown(false);
    setKeywordValue("");
    setSelectValue("");
    navigate("/jobs");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    console.log(window.location);
    alert(
      `The ${jobTitle} job at ${company} has been saved to your clipboard!`
    );
  };

  return (
    <header
      id="header"
      ref={headerRef}
      className={
        pathName === "/"
          ? "homeHeader"
          : pathName === "/jobs" || pathName === `/jobs/${id}`
          ? "jobsHeader"
          : "errorHeader"
      }
    >
      <div
        className={
          pathName === "/" || pathName === "/jobs" || pathName === `/jobs/${id}`
            ? "overlay"
            : "noOverlay"
        }
      >
        <TopNav isTablet={isTablet} isMobile={isMobile} />
        {pathName === "/" ||
        pathName === "/jobs" ||
        pathName === `/jobs/${id}` ? (
          <div className="wrapper">
            <div className="textContainer">
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
                    {datePosted} by <span>{company}</span>
                  </p>
                </>
              )}
              {pathName === `/jobs/${id}` ? (
                <div className="postingLinks">
                  <button className="facebook">
                    <a href={facebook} target="_blank" rel="noreferrer">
                      <FaFacebookF /> Facebook
                    </a>
                  </button>
                  <button className="twitter">
                    <a href={twitter} target="_blank" rel="noreferrer">
                      <FaTwitter /> Twitter
                    </a>
                  </button>
                  <button className="copyLink" onClick={copyLink}>
                    <BiLinkAlt /> Copy
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    getJobs();
                  }}
                >
                  <div className="keyword">
                    <label htmlFor="keywordInput">
                      Your job title, keyword or company?
                    </label>
                    <input
                      type="text"
                      id="keywordInput"
                      placeholder="Google"
                      onChange={handleKeywordValue}
                      value={keywordValue}
                    />
                  </div>
                  <div className="category">
                    <label htmlFor="categorySelect">Category</label>
                    <p
                      className="placeholder"
                      onClick={handleDropDown}
                      tabIndex="0"
                    >
                      {selectValue ? selectValue : "Select:"}
                      {isDropDown ? <BiChevronUp /> : <BiChevronDown />}
                    </p>
                    {isDropDown ? (
                      <ul
                        className="select"
                        name="categorySelect"
                        id="categorySelect"
                      >
                        <li
                          className="dropDown"
                          onClick={(e) => {
                            handleSelectValue(e);
                            handleDropDown(e);
                          }}
                          tabIndex="0"
                        >
                          Any
                        </li>
                        {categories.map((category) => {
                          return (
                            <li
                              key={category}
                              className="dropDown"
                              onClick={(e) => {
                                handleSelectValue(e);
                                handleDropDown();
                              }}
                              tabIndex="0"
                            >
                              {category}
                            </li>
                          );
                        })}
                      </ul>
                    ) : undefined}
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      getJobs();
                    }}
                    tabIndex="0"
                  >
                    Search
                  </button>
                </form>
              )}
            </div>
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
      </div>
    </header>
  );
};

export default Header;
