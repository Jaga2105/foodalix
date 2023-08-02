import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./componenets/AppLayout";
import Body from "./componenets/Body";
import RestaurantDetails from "./componenets/RestaurantDetails";

function App() {
  return <RouterProvider router={appRouter} />;
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

export default App;
