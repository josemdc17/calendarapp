const Footer = () => {
  const url = "https://github.com/josemdc17/calendarapp";

  return (
    <div className="mainFooterWrapper">
      <div
        className="footerWrapper"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://github.com/josemdc17/calendarapp",'_blank', 'noreferrer');
    
        }}
      ></div>
      <div className="phrase">
        <p> &larr; Check on Github</p>
      </div>
    </div>
  );
};

export default Footer;
