import TopNavbar from "../../../components/TopNavbar"
import Slidebar from "../../../components/Slidebar"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store/store"
import Navbar from "../../../components/Navbar"
import Notification from "../components/Notification"

const Inbox = () => {
  const expanded = useSelector((state: RootState) => state.userData.expanded)

  return (
    <div>
      <TopNavbar />
      <Slidebar />
      <div className={`${expanded ? "ml-[220px]" : "ml-[56px]"}`}>
        <Navbar />
        <Notification />
      </div>
    </div>
  )
}

export default Inbox
