import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout/Layout";
import OverView from "../components/Dashboard/Overview/OverView/OverView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/serverlist",
        element: <OverView />,
      },
    ],
  },
]);
