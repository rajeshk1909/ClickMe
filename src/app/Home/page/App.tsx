import Slidebar from "../components/Slidebar"
import { useSelector } from "react-redux"
import { userDataRootState } from "../../../redux/features/userData"
import Navbar from "../components/Navbar"
import Greeting from "../components/Greeting"
import Recends from "../components/Recents"
import Agenda from "../components/Agenda"
import MyWork from "../components/MyWork"
import Comments from "../components/Comments"
import LineUp from "../components/LineUp"
import AiStandUp from "../components/AiStandUp"

function App() {
  const curruntUserData = useSelector(
    (state: userDataRootState) => state.userData.currentUserData
  )

  const expanded = useSelector(
    (state: userDataRootState) => state.userData.expanded
  )

  return (
    <div>
      <Slidebar curruntUserData={curruntUserData} />
      <div className={`${expanded ? "ml-[220px]" : "ml-[60px]"}`}>
        <Navbar />
        <Greeting curruntUserData={curruntUserData} />
        <div
          className={` ${
            expanded ? "xl:grid-cols-2 " : "lg:grid-cols-2 "
          } grid-cols-1 grid  mx-6 gap-6`}>
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
        <LineUp />
        <AiStandUp />
      </div>
    </div>
  )
}

export default App
