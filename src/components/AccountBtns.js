const AccountBtns = ({ seekerText, mgrText }) => {
  return (
    <div className="accountBtns">
      <button className="seekerBtn">{seekerText}</button>
      <button className="mgrBtn">{mgrText}</button>
    </div>
  );
};

export default AccountBtns;
