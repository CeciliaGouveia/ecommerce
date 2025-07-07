import React from "react"
import "./styles.css"
import { axiosPrivate } from "../../api/axios.js"
import { format } from "timeago.js"

const WidgetLg = () => {
  const [orders, setOrders] = React.useState([])

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }

  React.useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axiosPrivate.get("/orders")
        setOrders(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getOrders()
  }, [])

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          {orders.map((order) => (
            <tr className="widgetLgTr" key={order._id}>
              <td className="wigetLgUser">
                <img
                  src="https://plus.unsplash.com/premium_photo-1689266188052-704d33673e69?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">{order.userId}</span>
              </td>
              <td className="widgetLgDate">{format(order.createdAt)}</td>
              <td className="widgetLgAmount">${order.amount}</td>
              <td className="widgetLgStatus">
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WidgetLg
