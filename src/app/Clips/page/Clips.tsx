import { useSelector } from "react-redux"
import Navbar from "../../../components/Navbar"
import Slidebar from "../../../components/Slidebar"
import TopNavbar from "../../../components/TopNavbar"
import { RootState } from "../../../redux/store/store"
import ClipsCard from "../components/ClipsCard"
import Button from "../../../components/Button"
import LearnMoreButton from "../../../components/LearnMoreButton"

const clipsData = [
  {
    src: "https://app-cdn.clickup.com/1.be895127c13cbbe4cd323033c769d9ea.svg",
    title: "Record in a snap",
    text: "Capture your device's screen with just a few clicks. Record and effortlessly share your videos with anyone.",
  },
  {
    src: "https://app-cdn.clickup.com/2.095abb088d53a13375dd2b3d4ad03f5a.png",
    title: "Unlock async productivity",
    text: "Skip the meetings and share all of your design updates, feedback videos, onboarding videos, and more in one place.",
  },
  {
    src: "https://app-cdn.clickup.com/3.36bb3d98fa726afd1fef03656c6c656e.png",
    title: "Watch , share , collaborate",
    text: "Clips automatically generate a link, allowing you to quickly share your clips anywhere, even outside of your Workspace.",
  },
]

const Clips = () => {
  const expanded = useSelector((state: RootState) => state.userData.expanded)
  return (
    <div>
      <TopNavbar />
      <Slidebar />
      <div className={`${expanded ? "ml-[220px]" : "ml-[56px]"}`}>
        <Navbar />
        <div className='flex mx-14 mt-5 justify-evenly'>
          {clipsData.map((data, index) => (
            <ClipsCard
              key={index}
              src={data.src}
              text={data.text}
              title={data.title}
            />
          ))}
        </div>
        <div className='flex items-center mt-10 flex-col'>
          <h1 className='font-semibold text-[18px]'>Create your first Clip!</h1>
          <LearnMoreButton
            btn={true}
            width='500'
            text='Create and share screen recordings to give your teammates context.
            Save your recordings, attach them to tasks, or share them anywhere.'
          />
          <Button name='Create clip' size='14' />
        </div>
      </div>
    </div>
  )
}

export default Clips
