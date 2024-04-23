import { Link } from 'react-router-dom';

export function BlogPostCard(props) {
  return (
    <section className="blog-card">
      <Link to={props.link}>
        <div className="cover-image-container">
          <img src={props.imageSource} className="cover-image" />
          <div className="cover-image-overlay"></div>
        </div>
        <div className="card-content">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <p>{props.date}</p>
        </div>
      </Link>
    </section>
  );
}
