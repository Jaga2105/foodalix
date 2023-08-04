import React, { useEffect } from 'react'
import Header from './componenets/Header'
import Footer from './componenets/Footer'
import "./App.css"
import { Outlet } from 'react-router-dom'

// Redux
import { Provider, useDispatch } from "react-redux"
import store from "./utils/store";
// react toastify
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const AppLayout = () => {
  

  return (
    <div >
      <Provider store={store}>
      <ToastContainer />
      <Header/>
      <Outlet/>
      <Footer/>
      </Provider>
    </div>
  )
}

export default AppLayout