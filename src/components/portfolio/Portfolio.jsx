import '../../styles/portfolio/portfolio.css';
import PortfolioLandingPage from './PortfolioLandingPage';
import Projects from './Projects';

export default function Portfolio() {
  return (
    <div style={{ width: '100%' }}>
      <PortfolioLandingPage />
      <Projects />
    </div>
  );
}
