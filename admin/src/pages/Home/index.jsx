import React from "react"
import "./styles.css"
import FeaturedInfo from "../../components/FeaturedInfo"
import Chart from "../../components/Chart"
import { userData } from "../../dummyData.js"
import WidgetSm from "../../components/WidgetSm"
import WidgetLg from "../../components/WidgetLg"

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home
