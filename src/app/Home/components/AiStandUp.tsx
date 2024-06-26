import { AiOutlineFullscreen } from "react-icons/ai"
import { MdOutlineMoreHoriz } from "react-icons/md"
import { PiStarFourFill } from "react-icons/pi"
import Button from "../../../components/Button"
import LearnMoreButton from "../../../components/LearnMoreButton"

const AiStandUp = () => {
  return (
    <div className='w-[100%] hover:shadow-[25px] hover:border h-[500px] my-5 pl-5 pt-5 border-2 rounded-xl '>
      <div className='flex w-[97%] justify-between items-center font-semibold '>
        <h1 className='ml-2'>AI StandUp</h1>
        <div className='flex items-center '>
          <AiOutlineFullscreen className=' cursor-not-allowed text-gray-400 m-1 text-base' />
          <button className='hover:bg-gray-200 flex items-center  rounded-md'>
            <MdOutlineMoreHoriz className=' m-1 cursor-pointer text-base' />
          </button>
        </div>
      </div>

      <div className='flex items-center h-[100%] justify-center'>
        <div className='flex items-center flex-col'>
          <PiStarFourFill className='text-[30px] text-[#ff37af]' />
          <LearnMoreButton
            btn={false}
            width='200'
            text='Use ClickUp AI to create a recurring summary of recent activity.'
          />
          <div className='mt-5'>
            <Button name='Write StandUp' size='12' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiStandUp
