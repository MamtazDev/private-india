import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout/Layout";
import OverView from "../components/Dashboard/Overview/OverView/OverView";
import Layout2 from "../Layout/Layout/Layout2";
import Favourites from "../components/Dashboard/DashMyself/Favourites/Favourites";
import SavedQueues from "./../components/Dashboard/DashMyself/SavedQueues/SavedQueues";
import OverviewMyDash from "../components/Dashboard/DashMyself/OverviewMyDash/OverviewMyDash";
import SpotifyProfile from "./../components/Dashboard/DashMyself/SpotifyProfile/SpotifyProfile";
import Layout3 from "./../Layout/Layout/Layout3";
import ServerPage from "./../components/Dashboard/ServerPage/ServerPage";
import ServerItems from "../components/Dashboard/Overview/ServerList/ServerItems";
import MyProducts from "../components/Dashboard/Overview/MyProducts/MyProducts";
import Payments from './../components/Dashboard/Overview/Payments';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <OverView />,
      },
      {
        path: "/server_list",
        element: <ServerItems />,
      },
      {
        path: "/myProducts",
        element: <MyProducts />,
      },
      {
        path: "/billing",
        element: <Payments />,
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
      {
        path: "/dashboard/spotify",
        element: <SpotifyProfile />,
      },
    ],
  },
  {
    path: "/server",
    element: <Layout3 />,
    children: [
      {
        path: "/server",
        element: <ServerPage />,
      },
    ],
  },
]);
