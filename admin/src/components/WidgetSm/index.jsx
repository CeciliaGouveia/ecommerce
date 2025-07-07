import React from "react"
import "./styles.css"
import { Visibility } from "@mui/icons-material"
import { axiosPrivate } from "../../api/axios.js"

const WidgetSm = () => {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axiosPrivate.get("users/?new=true")
        setUsers(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getUsers()
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle">{user.email}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WidgetSm
