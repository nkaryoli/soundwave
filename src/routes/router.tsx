import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from "../pages/Home";
import { Discover } from "../pages/Discover";
import { Join } from "../pages/Join";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/", 
                element: <Home />
            },
            {
                path: "/discover", 
                element: <Discover />
            },
            {
                path: "/join", 
                element: <Join />
            }

        ]
    },
]);