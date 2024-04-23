import '../styles/blog-post.css';
import NavBar from './NavBar';

export function BlogPost({ title, introParagraph, headings, paragraphs }) {
  function displayContent() {
    let allContent = [];
    for (let i = 0; i < headings.length; i++) {
      allContent.push(
        <>
          <h2>{headings[i]}</h2>
          <p>{paragraphs[i]}</p>
        </>
      );
    }
    return allContent;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="week">
          <h1>{title}</h1>
          <p>{introParagraph}</p>
          {displayContent().map((e) => {
            return e;
          })}
        </div>
      </main>
    </>
  );
}
