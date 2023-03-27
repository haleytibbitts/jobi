import Logo from "./Logo";

const BottomNav = () => {
  return (
    <nav className="btmNav">
      <div className="wrapper">
        <ul>
          <li>
            <Logo />
          </li>
          <li>
            <h2>Links</h2>
            <ul>
              <li>Pricing</li>
              <li>About us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </li>
          <li>
            <h2>Products</h2>
            <ul>
              <li>Take the tour</li>
              <li>Live chat</li>
              <li>Self-service</li>
              <li>Mobile</li>
              <li>Collaboration</li>
              <li>Reviews</li>
            </ul>
          </li>
          <li>
            <h2>Legal</h2>
            <ul>
              <li>Terms of use</li>
              <li>Terms & conditions</li>
              <li>Privacy</li>
              <li>Cookie policy</li>
            </ul>
          </li>
          <li>
            <h2>Newsletter</h2>
            <p>Join & get important new regularly</p>
            <form>
              <label htmlFor="newsletterInput" className="hidden">
                Enter your email
              </label>
              <input
                type="email"
                name="newsletterInput"
                id="newsletterInput"
                placeholder="Enter your email"
              />
              <button>Send</button>
            </form>
            <p>We only send interesting and relevant emails.</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BottomNav;
