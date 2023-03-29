import { Link } from "react-router-dom";

const AccountBtns = ({ candidateText, employerText }) => {
  return (
    <div className="accountBtns">
      <button className="candidateBtn">
        <Link to={"/register"}>{candidateText}</Link>
      </button>
      <button className="employerBtn">
        <Link to={"/post"}>{employerText}</Link>
      </button>
    </div>
  );
};

export default AccountBtns;
