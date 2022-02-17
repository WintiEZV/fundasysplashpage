import "./Home.css";

const Home = () => {
  return (
    <div className="hero">
      <div className="title">FUNDASY</div>
      <div className="description-box">
        <div className="description1">Fantasy Fund</div>
        <div className="description1">Real Opportunities</div>
      </div>
      <div className="footer">Coming Soon</div>
      <div className="email">
        <div className="email-intro">For inquiries, contact</div>
        <a className="email-text" href="mailto:victorwiseman@fundasy.io">
          victorwiseman@fundasy.io
        </a>
      </div>
    </div>
  );
};

export default Home;
