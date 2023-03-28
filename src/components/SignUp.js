import AccountBtns from "./AccountBtns";

const SignUp = () => {
  return (
    <section className="signUp">
      <div className="overlay">
        <div className="wrapper">
          <h2>
            Complete Job Portal<span>for Everyone.</span>
          </h2>
          <div className="textContainer">
            <p>Find your dream job & earn from all world the leading brands.</p>
            <AccountBtns
              candidateText={"Looking for job?"}
              employerText={"Start Hiring"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
