import { AiOutlineFullscreen } from "react-icons/ai"
import { MdOutlineMoreHoriz } from "react-icons/md"
import { IoReorderFour } from "react-icons/io5"
import { CiFolderOn } from "react-icons/ci"
import { BiTask } from "react-icons/bi"
import { FaUserGroup } from "react-icons/fa6"
import RecentsButton from "./RecentsButton"

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
  {
    icon: <IoReorderFour />,
    label: "Project 2",
    sublabel: "in Projects",
  },
  {
    icon: <FaUserGroup className='text-[#03a2fd]' />,
    label: "Team Space",
    sublabel: "",
  },
  {
    icon: <BiTask />,
    label: "Task 1",
    sublabel: "in Projects",
  },
  {
    icon: <IoReorderFour />,
    label: "Project 1",
    sublabel: "in Projects",
  },
  {
    icon: <BiTask />,
    label: "Task 3",
    sublabel: "in Project 2",
  },
  {
    icon: <BiTask />,
    label: "Task 3",
    sublabel: "in Project 1",
  },
  {
    icon: <BiTask />,
    label: "Task 2",
    sublabel: "in Project 1",
  },
]

const Recends = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[100%] hover:shadow-[25px] hover:border pl-5 pt-5 border-2 rounded-xl '>
        <div className='flex w-[97%] justify-between items-center font-semibold '>
          <h1 className='ml-2'>Recents</h1>
          <div className='flex items-center '>
            <button className='hover:bg-gray-200 flex items-center  rounded-md'>
              <AiOutlineFullscreen className=' m-1 cursor-pointer text-base' />
            </button>
            <button className='hover:bg-gray-200 flex items-center  rounded-md'>
              <MdOutlineMoreHoriz className=' m-1 cursor-pointer text-base' />
            </button>
          </div>
        </div>

        <div className='overflow-y-scroll h-[250px]'>
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

export default Recends
