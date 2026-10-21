import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Servicios from "../pages/servicios/page";
import Contacto from "../pages/contacto/page";
import Legal from "../pages/legal/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/legal",
    element: <Legal />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;