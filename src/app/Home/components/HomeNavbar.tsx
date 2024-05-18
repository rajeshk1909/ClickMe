import { GoHome } from "react-icons/go"
import SettingOpen from "./SettingOpen"

const HomeNavbar = () => {
  return (
    <div className='flex w-[100%] items-center justify-between'>
      <p className='ml-5 flex items-center'>
        <GoHome className='mr-2' /> Home
      </p>

      <div className='flex items-center'>
        <div className='border-r hidden sm:flex pr-3'>
          <button className=' bg-[#7b68ee]  hover:bg-[#5f48ea] font-bold text-white rounded-md py-1 px-5'>
            Manage Cards
          </button>
        </div>
        <SettingOpen />
      </div>
    </div>
  )
}

export default HomeNavbar
