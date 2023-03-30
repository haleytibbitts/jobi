import google from "../assets/google.svg";
import shipbob from "../assets/shipbob.svg";
import dribbble from "../assets/dribbble.svg";
import slack from "../assets/slack.svg";
import vine from "../assets/vine.svg";
import airbnb from "../assets/airbnb.svg";

const Partners = () => {
  return (
    <section className="partners">
      <ul className="wrapper" aria-label="List of partners">
        <li>
          <img src={google} alt="The Google logo" />
        </li>
        <li>
          <img src={shipbob} alt="The Ship Bob logo" />
        </li>
        <li>
          <img src={dribbble} alt="The Dribbble logo" />
        </li>
        <li>
          <img src={slack} alt="The Slack logo" />
        </li>
        <li>
          <img src={vine} alt="The Vine logo" />
        </li>
        <li>
          <img src={airbnb} alt="The Airbnb logo" />
        </li>
      </ul>
    </section>
  );
};

export default Partners;
