import Slidebar from "../../components/Slidebar"
import { useSelector } from "react-redux"
import { userDataRootState } from "../../redux/features/userData"
import Navbar from "../../components/Navbar"
import Greeting from "../../components/Greeting"

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
      </div>
    </div>
  )
}

export default App
