import clickupSymbol from "../assets/clickup-symbol.svg"
import { IoSearchSharp } from "react-icons/io5"
import { SiTicktick } from "react-icons/si"
import { FiPlusCircle } from "react-icons/fi"
import { MdEventNote } from "react-icons/md"
import { CiVideoOn } from "react-icons/ci"
import { LuAlarmClock } from "react-icons/lu"
import { IoDocumentTextOutline } from "react-icons/io5"
import { TbGridDots } from "react-icons/tb"
import { GiUpgrade } from "react-icons/gi"
import ProfileEditOpen from "./ProfileEditOpen"
import TopNavbarButton from "./TopNavbarButton"

const buttons = [
  {
    icon: <SiTicktick className='my-2 mx-2 ' />,
  },
  {
    icon: <MdEventNote className='my-2 mx-2 ' />,
  },
  {
    icon: <CiVideoOn className='my-2 mx-2 ' />,
  },
  {
    icon: <LuAlarmClock className='my-2 mx-2 ' />,
  },
  {
    icon: <IoDocumentTextOutline className='my-2 mx-2 ' />,
  },
  {
    icon: <TbGridDots className='my-2 mx-2 ' />,
  },
]

const TopNavbar = () => {
  return (
    <div className='px-5 bg-[#323452] sticky top-0 flex items-center justify-between h-10'>
      <div className='flex items-center '>
        <img src={clickupSymbol} height={13} width={13} alt='clickup-symbol' />
      </div>
      <div className='flex items-center'>
        <div className='flex w-[400px] hover:bg-[#a5a8bd] #bbc0c4 cursor-pointer px-2 text-white h-7 rounded-md bg-[#474964] items-center justify-between'>
          <div></div>
          <div className='flex text-[14px] items-center justify-center'>
            <IoSearchSharp className='mx-2' />
            Search...
          </div>
          <div>Ctrl+K</div>
        </div>
        <button className='bg-[#43418d] ml-3 rounded-md py-[2px] px-2 font-semibold text-white'>
          Ask AI
        </button>
      </div>

      <div className='flex items-center text-white'>
        <button className='flex items-center bg-[#ff39ac] px-2 font-semibold text-white py-[3px] rounded-md'>
          <GiUpgrade className='mr-1' />
          <p>Upgrade</p>
        </button>
        <button className=' flex mx-3 items-center text-white font-semibold hover:bg-[#a5a8bd] rounded-md px-3 py-[3px]'>
          <FiPlusCircle className='mr-1' />
          <p>New</p>
        </button>
        <div className='flex items-center border-l text-[14px] '>
          {buttons.map((button, index) => (
            <TopNavbarButton button={button} key={index} />
          ))}
          <ProfileEditOpen />
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
