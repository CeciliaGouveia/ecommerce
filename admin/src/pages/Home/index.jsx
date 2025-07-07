import React from "react"
import "./styles.css"
import FeaturedInfo from "../../components/FeaturedInfo"
import Chart from "../../components/Chart"
import { userData } from "../../dummyData.js"
import WidgetSm from "../../components/WidgetSm"
import WidgetLg from "../../components/WidgetLg"
import { axiosPrivate } from "../../api/axios.js"

const Home = () => {
  const [userStats, setUserStats] = React.useState([])

  const MONTHS = React.useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  )

  React.useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axiosPrivate.get("/users/stats")
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        )
      } catch (err) {
        console.log(err)
      }
    }
    getStats()
  }, [MONTHS])

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
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
