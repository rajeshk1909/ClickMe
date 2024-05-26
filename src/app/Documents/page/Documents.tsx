import { useSelector } from "react-redux"
import Navbar from "../../../components/Navbar"
import Slidebar from "../../../components/Slidebar"
import TopNavbar from "../../../components/TopNavbar"
import { RootState } from "../../../redux/store/store"
import DocsCategory from "../components/DocsCategory"
import Wiki from "../components/Wiki"
import DocsProject from "../components/DocsProject"

const Documents = () => {
  const expanded = useSelector((state: RootState) => state.userData.expanded)

  return (
    <div>
      <TopNavbar />
      <Slidebar />
      <div className={`${expanded ? "ml-[220px]" : "ml-[56px]"}`}>
        <Navbar />
        <DocsCategory />
        <Wiki />
        <DocsProject />
      </div>
    </div>
  )
}

export default Documents
