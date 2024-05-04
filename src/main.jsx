import ReactDOM from 'react-dom/client';
import Portfolio from './components/portfolio/Portfolio.jsx';
import { BlogPost } from './components/BlogPost.jsx';
import AboutMe from './components/AboutMe.jsx';
import './styles/styles.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import weeklyBlogs from './blogPosts.json';
import NavBar from './components/NavBar.jsx';
import Blog from './components/Blog.jsx';

export function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      <NavBar />
      <div style={{ width: '100vw', marginLeft: '10rem' }}>
        <Outlet />
      </div>
    </div>
  );
}

let routes = [
  {
    path: '/',
    element: <Portfolio />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/about',
    element: <AboutMe />,
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

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
