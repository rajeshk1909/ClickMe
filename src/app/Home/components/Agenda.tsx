import { AiOutlineFullscreen } from "react-icons/ai"
import { MdOutlineMoreHoriz } from "react-icons/md"
import { PiGreaterThanLight, PiLessThanLight } from "react-icons/pi"
import calendarIcon from "../../../assets/calendarIcon.svg"
import { CiCalendar } from "react-icons/ci"
import Button from "../../../components/Button"
import LearnMoreButton from "../../../components/LearnMoreButton"

const Agenda = () => {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  const monthName = currentDate.toLocaleDateString("en-US", { month: "long" })
  const dayName = currentDate.toLocaleDateString("en-US", { weekday: "long" })
  return (
    <div className='flex justify-center'>
      <div className='w-[100%] p-5 border-2 hover:shadow-[25px] hover:border rounded-xl '>
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
            <img
              src={calendarIcon}
              height={80}
              width={80}
              alt='Calendar Icon'
            />
            <LearnMoreButton
              text='Agenda items from your calendars will show here.'
              width='200'
              btn={true}
            />
            <div className='mt-5'>
              <Button name='+ Add calandar integrations' size='12' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agenda
