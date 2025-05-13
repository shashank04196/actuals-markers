import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Score from "./pages/Score";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/Game",
      element: <Game></Game>,
    },{
      path:"/Score",
      element:<Score></Score>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
