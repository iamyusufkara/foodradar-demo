import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { RestaurantPage } from './components/RestaurantPage';
import App from './App';
import RestaurantList from './components/RestaurantList';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RestaurantList />,
      },
      {
        path: 'restaurants/:id',
        element: <RestaurantPage />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
