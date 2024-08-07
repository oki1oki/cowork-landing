import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./shared/components/pages/Home.tsx";
import "./index.css";
import { NotFound } from "./shared/components/pages/NotFound.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={<NotFound />}></Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
