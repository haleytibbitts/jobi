import { Link } from "react-router-dom";

const AccountBtns = ({ candidateText, employerText }) => {
  return (
    <div className="accountBtns">
      <Link to={"/register"}>
        <button className="candidateBtn">{candidateText}</button>
      </Link>
      <Link to={"/post"}>
        <button className="employerBtn">{employerText}</button>
      </Link>
    </div>
  );
};

export default AccountBtns;
