import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <div className="logoContainer">
        <img src={logo} alt="Jobi Logo" />
      </div>
      <p>jobi</p>
    </div>
  );
};

export default Logo;
