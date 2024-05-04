import { FaArrowDown } from 'react-icons/fa';

export default function PortfolioLandingPage() {
  return (
    <div className="portfolio-landing-page">
      <h1>Nathan Wilson</h1>
      <p>Full stack web developer</p>
      <div className="why-hire-me">
        <p>Why hire me?</p>
        <FaArrowDown />
      </div>
    </div>
  );
}
