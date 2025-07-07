import React from "react"
import "./styles.css"
import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import { axiosPrivate } from "../../api/axios"

const FeaturedInfo = () => {
  const [income, setIncome] = React.useState([])
  const [percentage, setPercentage] = React.useState(0)
  const [userStats, setUserStats] = React.useState([])
  const [userPerc, setUserPerc] = React.useState(0)

  React.useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await axiosPrivate.get("orders/income")
        setIncome(res.data)

        if (res.data.length >= 2 && res.data[0].total !== 0) {
          const perc =
            ((res.data[1].total - res.data[0].total) / res.data[0].total) * 100
          setPercentage(perc)
        }
      } catch (err) {
        console.log(err)
      }
    }

    const getUserStats = async () => {
      try {
        const res = await axiosPrivate.get("users/stats")
        const sorted = res.data.sort((a, b) => a._id - b._id)
        setUserStats(sorted)

        if (sorted.length >= 2 && sorted[sorted.length - 2].total !== 0) {
          const current = sorted[sorted.length - 1].total
          const previous = sorted[sorted.length - 2].total
          const perc = ((current - previous) / previous) * 100
          setUserPerc(perc)
        }
      } catch (err) {
        console.log(err)
      }
    }
    getIncome()
    getUserStats()
  }, [])

  const arrowConditional =
    percentage < 0 ? (
      <ArrowDownward className="featuredIcon negative" />
    ) : (
      <ArrowUpward className="featuredIcon" />
    )

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            ${income[1] ? income[1].total : "Carregando..."}
          </span>
          <span className="featuredMoneyRate">
            %{Math.floor(percentage)}
            {arrowConditional}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">New Customers</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {userStats[userStats.length - 1]?.total ?? "Carregando..."}
          </span>
          <span className="featuredMoneyRate">
            %{Math.floor(userPerc)}
            {arrowConditional}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,255</span>
          <span className="featuredMoneyRate">
            +2.4
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
