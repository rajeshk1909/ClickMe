import Slidebar from "../../../components/Slidebar"
import { useSelector } from "react-redux"
import Navbar from "../../../components/Navbar"
import Greeting from "../components/Greeting"
import Recends from "../components/Recents"
import Agenda from "../components/Agenda"
import MyWork from "../components/MyWork"
import Comments from "../components/Comments"
import LineUp from "../components/LineUp"
import AiStandUp from "../components/AiStandUp"
import TopNavbar from "../../../components/TopNavbar"
import { RootState } from "../../../redux/store/store"


function App() {
  const expanded = useSelector((state: RootState) => state.userData.expanded)
  const toggleSwitch = useSelector(
    (state: RootState) => state.userData.toggleSwitch
  )
  

  return (
    <div>
      <TopNavbar />
      <Slidebar />
      <div className={`${expanded ? "ml-[220px]" : "ml-[56px]"}`}>
        <Navbar />
        {toggleSwitch ? <Greeting /> : ""}
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
