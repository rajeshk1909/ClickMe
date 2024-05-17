import Slidebar from "../../../components/Slidebar"
import { useSelector } from "react-redux"
import { userDataRootState } from "../../../redux/features/userData"
import Navbar from "../../../components/Navbar"
import Greeting from "../components/Greeting"
import Recends from "../components/Recents"
import Agenda from "../components/Agenda"
import MyWork from "../components/MyWork"
import Comments from "../components/Comments"
import LineUp from "../components/LineUp"
import AiStandUp from "../components/AiStandUp"
import TopNavbar from "../../../components/TopNavbar"

function App() {
  const curruntUserData = useSelector(
    (state: userDataRootState) => state.userData.currentUserData
  )

  const expanded = useSelector(
    (state: userDataRootState) => state.userData.expanded
  )

  const toggleSwitch = useSelector(
    (state: userDataRootState) => state.userData.toggleSwitch
  )

  return (
    <div>
      <TopNavbar curruntUserData={curruntUserData} />
      <Slidebar curruntUserData={curruntUserData} />
      <div className={`${expanded ? "ml-[220px]" : "ml-[60px]"}`}>
        <Navbar />
        {toggleSwitch ? <Greeting curruntUserData={curruntUserData} /> : ""}
        <div
          className={` ${expanded ? "xl:grid-cols-2 " : "lg:grid-cols-2  "} ${
            toggleSwitch ? "" : "mt-4"
          }
           grid-cols-1 grid  mx-6 gap-6`}>
          <Recends />
          <Agenda />
        </div>
        <div
          className={` ${
            expanded ? "xl:grid-cols-2 " : "lg:grid-cols-2 "
          } grid-cols-1 grid  mx-6 gap-6`}>
          <MyWork />
          <Comments />
        </div>
        <div
          className={` ${
            expanded ? "xl:grid-cols-2 " : "lg:grid-cols-2 "
          } grid-cols-1 grid  mx-6 gap-6`}>
          <LineUp />
        </div>
        <div
          className={` ${
            expanded ? "xl:grid-cols-2 " : "lg:grid-cols-2 "
          } grid-cols-1 grid  mx-6 gap-6`}>
          <AiStandUp />
        </div>
      </div>
    </div>
  )
}

export default App
