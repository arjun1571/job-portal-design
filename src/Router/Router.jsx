import { createBrowserRouter } from "react-router-dom";
import Job from "../Component/Job/Job";
import Reviews from "../Component/Job/Reviews/Reviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Job></Job>,
  },
  {
    path: "/review",
    element: <Reviews></Reviews>,
  },
]);
