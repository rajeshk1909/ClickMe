import { AiOutlineFullscreen } from "react-icons/ai"
import { MdOutlineMoreHoriz } from "react-icons/md"
import { PiGreaterThanLight, PiLessThanLight } from "react-icons/pi"
import { CiCalendar } from "react-icons/ci"
import { FaCalendarAlt } from "react-icons/fa"

const Agenda = () => {
  const currentDate = new Date() // Get current date
  const currentDay = currentDate.getDay()
  const monthName = currentDate.toLocaleDateString("en-US", { month: "long" })
  const dayName = currentDate.toLocaleDateString("en-US", { weekday: "long" })

  return (
    <div className='flex justify-center'>
      <div className='w-[100%] p-5 border-2 rounded-xl '>
        <div className='flex w-[100%] justify-between items-center font-semibold '>
          <h1 className='ml-2'>Agenda</h1>
          <div className='flex items-center '>
            <button className='hover:bg-gray-200 flex items-center  rounded-md'>
              <AiOutlineFullscreen className=' m-1 cursor-pointer text-base' />
            </button>
            <button className='hover:bg-gray-200 flex items-center  rounded-md'>
              <MdOutlineMoreHoriz className=' m-1 cursor-pointer text-base' />
            </button>
          </div>
        </div>

        <div className='flex border-b pt-2 pb-1 text-sm justify-between items-center  '>
          <div className='flex items-center'>
            <div className='hover:text-[#7670d5] hover:cursor-pointer flex items-center'>
              <p className='mx-2'>{monthName}</p>
              <p>{currentDay} ,</p>
              <p className='mx-2'>{dayName.slice(0, 3)}</p>
            </div>
            <div className='flex items-center ml-5'>
              <button className='hover:bg-gray-200 flex items-center  rounded-md'>
                <PiLessThanLight className=' m-1 cursor-pointer text-sm' />
              </button>
              <button className='hover:bg-gray-200 flex items-center  rounded-md'>
                <PiGreaterThanLight className=' m-1 cursor-pointer text-sm' />
              </button>
            </div>
          </div>
          <div className='flex items-center'>
            <button className='hover:bg-gray-200 mx-2 text-xs flex items-center  rounded-md'>
              <p className='my-1 mx-2 cursor-pointer'>Today</p>
            </button>
            <button className='hover:bg-gray-200 flex items-center  rounded-md'>
              <CiCalendar className=' m-1 cursor-pointer text-base' />
            </button>
          </div>
        </div>

        <div className='flex items-center h-[200px] justify-center '>
          <div className='flex items-center flex-col'>
            <FaCalendarAlt className='text-[40px] ' />
            <p className='text-xs mt-5'>
              Agenda items from your calendars will show here. Learn more
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

export default Agenda