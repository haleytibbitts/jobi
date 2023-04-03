const Loader = () => {
  return (
    <div className="loader">
      <div className="leftEllipse">
        <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15.5" cy="15.5" r="15.5" />
        </svg>
      </div>
      <div className="rightEllipse">
        <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15.5" cy="15.5" r="15.5" />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
