import React from "react"
import Layout from "./components/layout"
import Navbar from "./components/Navbar"
import { Provider } from "react-redux"
import { store } from "./redux/store"

function App() {
  

  return (
    
    <>
    <Provider store={store}>
    <Navbar />
    <Layout/>
    
    </Provider>
    </>
  )
}

export default App
