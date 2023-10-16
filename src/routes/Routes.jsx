import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout/Layout";
import Layout2 from "../Layout/Layout/Layout2";
import Favourites from "../components/Dashboard/DashMyself/Favourites/Favourites";
import SavedQueues from "./../components/Dashboard/DashMyself/SavedQueues/SavedQueues";
import OverviewMyDash from "../components/Dashboard/DashMyself/OverviewMyDash/OverviewMyDash";
import SpotifyProfile from "./../components/Dashboard/DashMyself/SpotifyProfile/SpotifyProfile";
import Layout3 from "./../Layout/Layout/Layout3";
import ServerPage from "./../components/Dashboard/ServerPage/ServerPage";
import ServerItems from "../components/Dashboard/Overview/ServerList/ServerItems";
import MyProducts from "../components/Dashboard/Overview/MyProducts/MyProducts";
import Payments from "./../components/Dashboard/Overview/Payments";
import Home from "../components/pages/Home/Home";
import Shop from "../components/pages/Shop/Shop/Shop";
import Commands from "../components/pages/Commands/Commands";
import Setting from "../components/Dashboard/ServerPage/Setting/Setting";
import Category from "../components/Dashboard/ServerPage/Category";
import LastFM from "../components/Dashboard/DashMyself/SpotifyProfile/LastFM";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/commands",
        element: <Commands />,
      },
    ],
  },
  {
    path: "/dash",
    element: <Layout />,
    children: [
      {
        path: "/dash",
        element: <ServerItems />,
      },
      {
        path: "/dash/server_list",
        element: <ServerItems />,
      },
      {
        path: "/dash/myProducts",
        element: <MyProducts />,
      },
      {
        path: "/dash/billing",
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
      {
        path: "/dashboard/lastfm",
        element: <LastFM />,
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
      {
        path: "/server/setting",
        element: <Setting />,
      },
      {
        path: "/server/commands",
        element: <Category />,
      },
    ],
  },
]);
