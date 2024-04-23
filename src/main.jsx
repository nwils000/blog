import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { BlogPost } from './components/BlogPost.jsx';
import './styles/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import weeklyBlogs from './blogPosts.json';

const site = import.meta.env.BASE_URL;

let routes = [
  {
    path: '/',
    element: <App />,
  },
];
for (let key in weeklyBlogs) {
  routes.push({
    path: `/${key}`,
    element: (
      <BlogPost
        title={weeklyBlogs[key].title}
        introParagraph={weeklyBlogs[key].introParagraph}
        headings={weeklyBlogs[key].headings}
        paragraphs={weeklyBlogs[key].paragraphs}
      />
    ),
  });
}

const router = createBrowserRouter(routes, {
  basename: site,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
