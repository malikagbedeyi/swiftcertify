import React from 'react'
import Navbar from '../Component/HomeComponent/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Sass/Home/home.scss'
import Product from '../Component/HomeComponent/Product';
import Introduction from '../Component/HomeComponent/Introduction';
import Benefit from '../Component/HomeComponent/Benefit';
import Service from '../Component/HomeComponent/Service';
import Activites from '../Component/HomeComponent/Activites';
import Footer from '../Component/Footer';
import Header from '../Component/Header';
const Home = () => {
  return (
    <div className='home'>
      {/* <Header /> */}
      <Navbar />
      <Product />
      <Introduction />
      <Benefit />
      <Service />
      <Activites />
      <Footer />
    </div>
  )
}

export default Home
