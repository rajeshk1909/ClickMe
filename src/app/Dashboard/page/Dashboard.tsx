import { useSelector } from "react-redux"
import Navbar from "../../../components/Navbar"
import Slidebar from "../../../components/Slidebar"
import TopNavbar from "../../../components/TopNavbar"
import { RootState } from "../../../redux/store/store"
import DashboardCard from "../components/DashboardCard"

const cardsData = [
  {
    src: "https://app-cdn.clickup.com/simple-dashboard.87339d9de58c592cc49d907c2786e94d.svg",
    title: "Simple Dashboard",
    text: "Easily manage and prioritize daily tasks.",
  },
  {
    src: "	https://app-cdn.clickup.com/team-reporting.e35ef8ef9597622cabcee0bb9edcb48c.svg",
    title: "Team Reporting",
    text: "Encourage collaboration by viewing progress across team.",
  },
  {
    src: "	https://app-cdn.clickup.com/time-tracking.461edd9f61ee3b6f7b502b5f4b7e79f9.svg",
    title: "Time Tracking",
    text: "View and report on time tracking metrics.",
  },
  {
    src: "https://app-cdn.clickup.com/project-management.117e87b276b30f48f90e4e8c4b965332.svg",
    title: "Project Management",
    text: "Deep-dive on detailed projects from a central place.",
  },
  {
    src: "	https://app-cdn.clickup.com/client-portal.91921b5acc8c3e308f0b51fa7dc60364.svg",
    title: "Client Portal",
    text: "Chat and collaborate with clients on tasks and projects.",
  },
  {
    src: "",
    title: "Start from scratch",
    text: "",
  },
]

const Dashboard = () => {
  const expanded = useSelector((state: RootState) => state.userData.expanded)
  return (
    <div>
      <TopNavbar />
      <Slidebar />
      <div className={`${expanded ? "ml-[220px]" : "ml-[56px]"}`}>
        <Navbar />
        <div className='flex mt-[80px] items-center flex-col'>
          <h1 className='text-[22px] cursor-default font-semibold'>
            Create a Dashboard
          </h1>
          <p className='w-[500px] mt-4 cursor-default text-center text-[14px] text-[#2a2e34]'>
            Get started with a Dashboard template or create a custom Dashboard
            to fit your exact needs.
          </p>
          <div className="grid mt-8 gap-2 grid-cols-3">
            {cardsData.map((card , index) => (
              <DashboardCard
                key={index}
                src={card.src}
                title={card.title}
                text={card.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
