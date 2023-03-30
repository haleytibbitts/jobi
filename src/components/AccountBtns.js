import { Link } from "react-router-dom";

const AccountBtns = ({ candidateText, employerText, onClick }) => {
  return (
    <div className="accountBtns">
      <button className="candidateBtn" onClick={onClick}>
        <Link to={"/register"}>{candidateText}</Link>
      </button>
      <button className="employerBtn" onClick={onClick}>
        <Link to={"/post"}>{employerText}</Link>
      </button>
    </div>
  );
};

export default AccountBtns;
