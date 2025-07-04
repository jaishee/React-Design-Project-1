import React from 'react'
import Navbar from './layouts/Navbar'
import Banner from './layouts/Banner'
import Service from './layouts/Service'
import Feature from './layouts/Feature'
import CardLayout from './layouts/CardLayout'
import Impact from './layouts/Impact'
import ChoosePlan from './layouts/ChoosePlan'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Service />
      <Feature />
      <CardLayout />
      <Impact />
      <ChoosePlan/>
      <Footer/>
    </>
  )
}

export default App
