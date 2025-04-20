import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import App from "../App";

const route = createBrowserRouter([
    {
        path: '/',
        element:<Home />
    },
    {
        path: '/quiz',
        element: <App />
    }
])

export default route;
