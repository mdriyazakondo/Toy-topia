import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import AllToys from "../pages/AllToys/AllToys";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import SingleToys from "../pages/AllToys/SingleToys";
import Loading from "../pages/Loading/Loading";
import PriaviteRoute from "../priviteRoute/PriaviteRoute";
import ErrorPage from "../pages/Error/ErrorPage";
import Forget from "../auth/Forget";
import Contacts from "../pages/Contacts/Contacts";
import Blog from "../pages/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <Loading />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: (
          <PriaviteRoute>
            <Profile />
          </PriaviteRoute>
        ),
      },
      {
        path: "/products",
        element: <AllToys />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/products/:id",
        element: <SingleToys />,
        loader: () => fetch("/toys.json"),
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/forget",
        element: <Forget />,
      },
    ],
  },
]);
