import { AiOutlineFullscreen } from "react-icons/ai"
import { MdOutlineMoreHoriz } from "react-icons/md"

const AiStandUp = () => {
  return (
    <div className='ml-5'>
      <div className='w-[48%] h-[500px] my-5 pl-5 pt-5 border-2 rounded-xl '>
        <div className='flex w-[97%] justify-between items-center font-semibold '>
          <h1 className='ml-2'>Line Up</h1>
          <div className='flex items-center '>
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
            <p className='text-xs mt-5'>
              Use ClickUp AI to create a recurring summary of
            </p>
            <p  className='text-xs'>recent activity.</p>
            <div className='mt-5'>
              <button className=' bg-[#7b68ee]  hover:bg-[#5f48ea] text-xs font-semibold text-white rounded-md py-1 px-5'>
                {" "}
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
