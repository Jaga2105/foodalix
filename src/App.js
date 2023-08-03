import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./componenets/AppLayout";
import Body from "./componenets/Body";
import RestaurantDetails from "./componenets/RestaurantDetails";
import About from "./componenets/About";
import Help from "./componenets/Help";
import Cart from "./componenets/Cart";
import PaymentPage from "./componenets/PaymentPage";
import OrderSummary from "./componenets/OrderSummary";
import Error from "./componenets/Error";
import SignIn from "./componenets/SignIn";
import SignUp from "./componenets/SignUp";


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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      },
      {
        path: "/ordersummary",
        element: <OrderSummary />,
      },
      {
        path: "/signin",
        element: <SignIn />,
        errorElement: <Error />,
      },
      {
        path: "/signup",
        element: <SignUp />,
        errorElement: <Error />,
      },
    ],
  },
]);

export default App;
