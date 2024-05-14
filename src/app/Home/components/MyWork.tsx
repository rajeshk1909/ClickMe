import { AiOutlineFullscreen } from "react-icons/ai"
import { MdOutlineMoreHoriz } from "react-icons/md"
import { IoSettingsOutline } from "react-icons/io5"
import whiteLogo from "../../../assets/clickup_up_white_logo.svg"

const MyWork = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[100%] h-[500px] my-5 pl-5 pt-5 border-2 rounded-xl '>
        <div className='flex w-[97%] justify-between items-center font-semibold '>
          <h1 className='ml-2'>My Work</h1>
          <div className='flex items-center '>
            <button className='hover:bg-gray-200 flex items-center  rounded-md'>
              <IoSettingsOutline className=' m-1 cursor-pointer text-base' />
            </button>
            <button className='hover:cursor-not-allowed flex items-center  rounded-md'>
              <AiOutlineFullscreen className=' hover:cursor-not-allowed text-gray-400 m-1 cursor-pointer text-base' />
            </button>
            <button className='hover:bg-gray-200 flex items-center  rounded-md'>
              <MdOutlineMoreHoriz className=' m-1 cursor-pointer text-base' />
            </button>
          </div>
        </div>

        <div className='flex items-center h-[100%] justify-center'>
          <div className='flex items-center flex-col'>
            <img src={whiteLogo} alt='Click Up Logo' height={80} width={80} />
            <p className='text-xs flex items-center mt-5'>
              Tasks and Reminders assigned to you will show here.
              <button className='border-b border-white ml-1 hover:border-[#7670d5] text-[#7670d5]'>
                Learn more
              </button>
            </p>
            <div className='mt-5'>
              <button className=' bg-[#7b68ee]  hover:bg-[#5f48ea] text-xs font-semibold text-white rounded-md py-1 px-5'>
                {" "}
                + Add calandar integrations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWork
