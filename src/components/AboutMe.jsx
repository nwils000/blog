import { FaReact } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import '../styles/about-me.css';

const AboutMe = () => {
  return (
    <>
      <div className="about-me-container">
        <section className="content">
          <div className="intro-statement">
            <p>
              <FaReact
                size={30}
                style={{ color: '#61DAFB', marginRight: '10px' }}
              />
              <SiDjango
                size={30}
                style={{ color: '#092E20', marginRight: '10px' }}
              />
              I specialize in React and Django. My diverse background in
              leadership roles, such as cheer coaching and missionary work, has
              helped me develop strong skills in team collaboration and project
              management. Combined with my experience developing products like
              an SEO tool and a Web Development Agency, I am well-equipped to
              contribute to innovative and challenging tech projects.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
