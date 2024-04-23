import { BlogPostCard } from './BlogPostCard';
import blogPostCards from '../blogPostCards.json';

let blogCards = [];
for (let key in blogPostCards) {
  blogCards.push(
    <BlogPostCard
      link={`/${key}`}
      imageSource={blogPostCards[key].imageSource}
      title={blogPostCards[key].title}
      description={blogPostCards[key].description}
      date={blogPostCards[key].date}
    />
  );
  console.log(blogPostCards[key].title);
}

export default function BlogPostCardWrapper() {
  return (
    <main>
      <div className="cards-container" id="cards-container">
        {blogCards.map((e) => {
          return e;
        })}
      </div>
    </main>
  );
}
