import React from 'react'
import Footer from './containers/Footer/Footer'
import Article from './components/article/Article'
import Navbar from './components/Navbar/Navbar'
import Brand from './components/brand/Brand'
import CTA from './components/cta/CTA'
import Feature from './components/features/Feature'
import Blog from './containers/Blog/Blog'
import Possibility from './containers/Possibility/Possibility'
import Features from './containers/Features/Features'
import WhatGPT3 from './containers/whatGPT3/WhatGPT3'
import Header from './containers/Header/Header'
import './App.css'
const App = () => {
  return (
    <div className='App'>
    <div className='gradient_bg'>
    <Navbar/>
    <Header/>

    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>
    
    </div>
  )
}

export default App
