import { createBrowserRouter} from "react-router-dom";
import Esc from "../pages/esc";

import HomePage from "../pages/home";
import Motor from "../pages/motor";
import Propeller from "../pages/propeller";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/motor",
    element: <Motor />
  },
  {
    path: "/esc",
    element: <Esc />
  },  
  {
    path: "/propeller",
    element: <Propeller />
  },  
  
]);

export default router;
