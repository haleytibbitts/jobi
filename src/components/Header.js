import TopNav from "./TopNav";
import categories from "../utilities/categories.json";

const Header = () => {
  console.log(categories[0]);
  return (
    <header>
      <TopNav />
      <div className="wrapper">
        <h2>
          Find & Hire Experts<span>for any job.</span>
        </h2>
        <p>
          Unlock your potential with quality jobs & earn from world leading
          brands.
        </p>
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
      </div>
    </header>
  );
};

export default Header;
