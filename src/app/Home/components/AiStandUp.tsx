import { AiOutlineFullscreen } from "react-icons/ai"
import { MdOutlineMoreHoriz } from "react-icons/md"
import { PiStarFourFill } from "react-icons/pi"


const AiStandUp = () => {

  return (
    <div className=''>
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
            <p className='text-xs w-[200px] text-center mt-5'>
              Use ClickUp AI to create a recurring summary of recent activity.
            </p>
            <div className='mt-5'>
              <button className=' bg-[#7b68ee]  hover:bg-[#5f48ea] text-xs font-semibold text-white rounded-md py-1 px-5'>
                Write StandUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiStandUp
