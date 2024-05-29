import { AiOutlineFullscreen } from "react-icons/ai"
import { MdOutlineMoreHoriz } from "react-icons/md"
import { IoSettingsOutline } from "react-icons/io5"
import whiteLogo from "../../../assets/clickup_up_white_logo.svg"
import Button from "../../../components/Button"
import LearnMoreButton from "../../../components/LearnMoreButton"

const MyWork = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[100%] hover:shadow-[25px] hover:border h-[500px] my-5 sm:pl-5 pt-5 border-2 rounded-xl '>
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
            <LearnMoreButton
              btn={true}
              text=' Tasks and Reminders assigned to you will show here.'
              width='200'
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

export default MyWork
