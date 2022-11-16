import { RouterProvider } from "react-router-dom";
import router from "./router";
function App() {
  return (
    <div className="bg-[#343a40] text-white h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
