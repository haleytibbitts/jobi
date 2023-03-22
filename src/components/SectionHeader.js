const SectionHeader = ({ headerText, linkText }) => {
  return (
    <div className="flexContainer">
      <h3>{headerText}</h3>
      <p>
        <a href="">{`${linkText} >`}</a>
      </p>
    </div>
  );
};

export default SectionHeader;
