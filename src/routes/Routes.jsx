import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout/Layout";
import OverView from "../components/Dashboard/Overview/OverView/OverView";
import Layout2 from "../Layout/Layout/Layout2";
import Favourites from "../components/Dashboard/DashMyself/Favourites/Favourites";
import SavedQueues from "./../components/Dashboard/DashMyself/SavedQueues/SavedQueues";
import OverviewMyDash from "../components/Dashboard/DashMyself/OverviewMyDash/OverviewMyDash";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/overview",
        element: <OverView />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Layout2 />,
    children: [
      {
        path: "/dashboard/favourites",
        element: <Favourites />,
      },
      {
        path: "/dashboard/savedQues",
        element: <SavedQueues />,
      },
      {
        path: "/dashboard/overview",
        element: <OverviewMyDash />,
      },
    ],
  },
]);
