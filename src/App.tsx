import { RouterProvider, RouteObject, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

const routes: RouteObject[] = ([
  {
    path: "/",
    element: <Home />
  },
]);

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
