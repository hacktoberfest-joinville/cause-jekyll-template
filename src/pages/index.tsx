import React from 'react'

import Agenda from '../components/Agenda'
import Header from '../components/Header'
import Main from '../components/Main'
import SEO from '../components/SEO'
import GlobalStyles from '../styles/global'

const Home = () => {
  return (
    <>
      <SEO />
      <GlobalStyles />

      <Header />
      {/* <Navbar /> */}
      <Agenda />
    </>
  )
}

export default Home
