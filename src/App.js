import './App.css';
import React from "react";
import MainRouter from './router/MainRouter'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <MainRouter />
      <Footer />
    </>
  )
}

export default App
