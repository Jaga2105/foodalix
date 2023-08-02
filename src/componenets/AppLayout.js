import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

// Redux
import { Provider } from "react-redux"
import store from "../utils/store";

const AppLayout = () => {
  return (
    <div >
      <Provider store={store}>
      <Header/>
      <Outlet/>
      <Footer/>
      </Provider>
    </div>
  )
}

export default AppLayout