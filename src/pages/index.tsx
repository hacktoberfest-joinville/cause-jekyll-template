import React from 'react'

import Agenda from '../components/Agenda'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import SEO from '../components/SEO'
import GlobalStyles from '../styles/global'

const Home = () => {
  return (
    <>
      <SEO />
      <GlobalStyles />
      {/* <Main /> */}
      <Header />
      {/* <Navbar /> */}
      <Agenda />
      <Footer />
    </>
  )
}

export default Home
