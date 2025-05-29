import React from "react"
import Navbar from "../../components/Navbar"
import Announcement from "../../components/Announcement"
import Slider from "../../components/Slider"
import Categories from "../../layouts/Categories"
import Products from "../../layouts/Products"
import Newsletter from "../../layouts/Newsletter"
import Footer from "../../layouts/Footer"

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
