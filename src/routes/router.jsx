import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/home';
import Blog from '../pages/blog';
import Calculadora from '../pages/calculadora';
import Contato from '../pages/contato';
import NotFound from '../pages/notFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/calculadora",
        element: <Calculadora />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]
  },
]);

export default router;
