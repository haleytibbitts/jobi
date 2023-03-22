import AccountBtns from "./AccountBtns";

const SignUp = () => {
  return (
    <section className="signUp">
      <div className="wrapper">
        <h3>
          Complete Job Portal<span>for Everyone.</span>
        </h3>
        <div className="textContainer">
          <p>Find your dream job & earn from all world the leading brands.</p>
          <AccountBtns
            candidateText={"Looking for job?"}
            employerText={"Start Hiring"}
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
