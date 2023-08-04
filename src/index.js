import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import AppLayout from "./componenets/AppLayout";
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




const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
