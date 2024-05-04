import { useState } from 'react';
import '../../styles/portfolio/Projects.css';

const projectsData = [
  {
    id: 1,
    backgroundImage:
      'https://nathan-portfolio-assets.s3.us-east-2.amazonaws.com/Screenshot+(47).png',
    title: 'Kanban Board',
    description:
      'A Kanban board built with React that allows users to add tasks and categorizes them by severity.',
    technologies: ['React', 'useContext', 'useReducer'],
    githubLink: 'https://github.com/nwils000/kanban-board',
    demoLink:
      'https://kanban-board-1l9t-obz1xiuw1-nathan-wilsons-projects-0d96a133.vercel.app/',
  },
  {
    id: 2,
    backgroundImage:
      'https://nathan-portfolio-assets.s3.us-east-2.amazonaws.com/Screenshot+(45).png',
    title: 'Weather Dashboard',
    description:
      'A weather dashboard built with vanilla JavaScript and a weather API that displays weather based on zip code.',
    technologies: ['JavaScript', 'Axios'],
    githubLink: 'https://github.com/nwils000/weather-dashboard',
    demoLink: 'https://nathans-weather-dashboard.netlify.app/',
  },
  {
    id: 3,
    backgroundImage:
      'https://nathan-portfolio-assets.s3.us-east-2.amazonaws.com/Screenshot+(43).png',
    title: 'Site Scout',
    description:
      'Contributed by integrating the OpenAI Chat API to automatically review site data and perform consistent full-site SEO audits.',
    technologies: ['React', 'Express', 'OpenAI Chat API'],
    githubLink: '',
    demoLink: 'https://sitescout.pro/app',
  },
  {
    id: 4,
    backgroundImage:
      'https://nathan-portfolio-assets.s3.us-east-2.amazonaws.com/Screenshot+(44).png',
    title: 'Tic-Tac-Toe',
    description: 'A tic-tac-toe web app built with vanilla JavaScript.',
    technologies: ['JavaScript'],
    githubLink: 'https://github.com/nwils000/tic-tac-toe',
    demoLink: 'https://nathans-tic-tac-toe.netlify.app/',
  },
  {
    id: 5,
    backgroundImage:
      'https://nathan-portfolio-assets.s3.us-east-2.amazonaws.com/Screenshot+(36).png',
    title: 'Earth Food',
    description: `A fake restaurant's menu that is generated through an API, displayed and sorted with React.`,
    technologies: ['React'],
    githubLink: 'https://github.com/nwils000/restaurant-menu-site',
    demoLink: 'https://earth-food.netlify.app/',
  },
  {
    id: 6,
    backgroundImage: '',
    title: 'Project 6',
    description: 'Description of Project 6',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    githubLink: '',
    demoLink: '',
  },
];

export default function Projects() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const currentProjects = projectsData.slice(
    currentPageIndex * projectsPerPage,
    (currentPageIndex + 1) * projectsPerPage
  );

  const goToNextPage = () => {
    setCurrentPageIndex((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    setCurrentPageIndex((prev) => prev - 1);
  };

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {currentProjects.map((project) => (
          <div className="project" key={project.id}>
            <div
              className="project-image"
              style={{ backgroundImage: `url('${project.backgroundImage}')` }}
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <span>Technologies used:</span>{' '}
                {project.technologies.join(', ')}
              </p>
              <div className="project-links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={goToPrevPage} disabled={currentPageIndex === 0}>
          Previous
        </button>
        <span>
          Page {currentPageIndex + 1} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPageIndex === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
