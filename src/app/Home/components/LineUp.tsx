import { AiOutlineFullscreen } from "react-icons/ai"
import { MdOutlineMoreHoriz } from "react-icons/md"
import tickIcon from "../../../assets/tickIcon.svg"

const LineUp = () => {
  return (
    <div className=''>
      <div className='w-[100%] h-[350px] hover:shadow-[25px] hover:border my-5 sm:pl-5 pt-5 border-2 rounded-xl '>
        <div className='flex w-[97%] justify-between items-center font-semibold '>
          <h1 className='ml-2'>Line Up</h1>
          <div className='flex items-center '>
            <AiOutlineFullscreen className=' text-gray-400 m-1 text-base' />
            <MdOutlineMoreHoriz className=' m-1 text-gray-400 text-base' />
          </div>
        </div>

        <div className='flex items-center h-[100%] justify-center'>
          <div className='flex items-center flex-col'>
            <img src={tickIcon} alt='Click Up Logo' height={80} width={80} />
            <p className='text-xs w-[200px] text-center mt-5'>
              LineUp keeps your most important tasks in one list. Add your most
              important task to get started.
              <button className='border-b border-white ml-1 hover:border-[#7670d5] text-[#7670d5]'>
                Learn more
              </button>
            </p>
            <div className='mt-5'>
              <button className=' bg-[#7b68ee]  hover:bg-[#5f48ea] text-xs font-semibold text-white rounded-md py-1 px-5'>
                {" "}
                + Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LineUp
