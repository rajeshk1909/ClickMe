import { AiOutlineFullscreen } from "react-icons/ai"
import { MdOutlineMoreHoriz } from "react-icons/md"
import commentIcon from "../../../assets/commentIcon.svg"

const Comments = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[100%] h-[500px] hover:shadow-[25px] hover:border my-5 sm:pl-5 pt-5 border-2 rounded-xl '>
        <div className='flex w-[97%] justify-between items-center font-semibold '>
          <h1 className='ml-2'>Assigned comments</h1>
          <div className='flex items-center '>
            <button className='hover:bg-gray-200 flex items-center  rounded-md'>
              <AiOutlineFullscreen className=' m-1 cursor-pointer text-base' />
            </button>
            <button className='hover:bg-gray-200 flex items-center  rounded-md'>
              <MdOutlineMoreHoriz className=' m-1 cursor-pointer text-base' />
            </button>
          </div>
        </div>

        <div className='flex items-center h-[100%] justify-center'>
          <div className='flex items-center flex-col '>
            <img src={commentIcon} alt='Comment Icon' height={80} width={80} />
            <h1 className='font-bold'>No Comments</h1>
            <p className='text-xs w-[200px] text-center mt-5'>
              You don't have any assigned comments.
              <button className='border-b border-white ml-1 hover:border-[#7670d5] text-[#7670d5]'>
                Learn more
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
