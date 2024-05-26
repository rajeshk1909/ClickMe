import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store/store"
import { IoReorderFour } from "react-icons/io5"
import { CiFolderOn } from "react-icons/ci"
import RecentsButton from "../../../components/RecentsButton"
import docsfav from "../../../assets/docs-fav.svg"

const items = [
  {
    icon: <IoReorderFour />,
    label: "Project 1",
    sublabel: "in Projects",
  },
  {
    icon: <CiFolderOn />,
    label: "Projects",
    sublabel: "in Team Space",
  },
]

const DocsCategory = () => {
  const expanded = useSelector((state: RootState) => state.userData.expanded)

  return (
    <div
      className={`m-5 grid mx-10 gap-5 grid-cols-1 ${
        expanded ? "xl:grid-cols-3" : "lg:grid-cols-3 "
      } `}>
      <div className=' border px-5 min-h-[200px] rounded-lg '>
        <p className='mt-5 px-1 font-semibold '>Recents</p>
        <div className='mt-3'>
          {items.map((item, index) => (
            <RecentsButton
              key={index}
              icon={item.icon}
              label={item.label}
              sublabel={item.sublabel}
            />
          ))}
        </div>
      </div>
      <div className=' border px-5 min-h-[200px] rounded-lg '>
        <p className='mt-5 px-1 font-semibold '>Favorites</p>
        <div className='flex items-center justify-center flex-col '>
          <img src={docsfav} height={70} width={70} alt='' />
          <p className='text-[12px]'>Your favorited Docs will show here.</p>
        </div>
      </div>
      <div className=' border px-5 min-h-[200px] rounded-lg '>
        <p className='mt-5 px-1 font-semibold '>Created by Me</p>
        <div className='mt-3'>
          {items.map((item, index) => (
            <RecentsButton
              key={index}
              icon={item.icon}
              label={item.label}
              sublabel={item.sublabel}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DocsCategory
