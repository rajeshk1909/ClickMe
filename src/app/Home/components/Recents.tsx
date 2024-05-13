import { AiOutlineFullscreen } from "react-icons/ai"
import { MdOutlineMoreHoriz } from "react-icons/md"
import { IoReorderFour } from "react-icons/io5"
import { LuDot } from "react-icons/lu"
import { ImNewTab } from "react-icons/im"
import { CiFolderOn } from "react-icons/ci"
import { BiTask } from "react-icons/bi"
import { FaUserGroup } from "react-icons/fa6"

const Recends = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[100%] pl-5 pt-5 border-2 rounded-xl '>
        <div className='flex w-[97%] justify-between items-center font-semibold '>
          <h1 className='ml-2'>Recents</h1>
          <div className='flex items-center '>
            <button className='hover:bg-gray-200 flex items-center  rounded-md'>
              <AiOutlineFullscreen className=' m-1 cursor-pointer text-base' />
            </button>
            <button className='hover:bg-gray-200 flex items-center  rounded-md'>
              <MdOutlineMoreHoriz className=' m-1 cursor-pointer text-base' />
            </button>
          </div>
        </div>

        <div className='overflow-y-scroll h-[250px]'>
          <div className='w-[98%] hover:cursor-pointer group justify-between px-2 flex items-center hover:bg-gray-100 py-1 rounded-md'>
            <div className='flex items-center'>
              <IoReorderFour />
              <p className='ml-3 mr-1'>Project 1</p>

              <p className='text-gray-400 text-sm flex items-center'>
                {" "}
                <LuDot /> in Projects
              </p>
            </div>
            <div className='group-hover:flex hidden  items-center'>
              <button className='hover:bg-gray-200 mr-1 border bg-white  rounded-md'>
                <ImNewTab className=' m-1 cursor-pointer text-sm' />
              </button>
              <button className='hover:bg-gray-200 border bg-white  rounded-md'>
                <AiOutlineFullscreen className=' m-1 cursor-pointer text-sm' />
              </button>
            </div>
          </div>

          <div className='w-[98%] hover:cursor-pointer group justify-between px-2 flex items-center hover:bg-gray-100 py-1 rounded-md'>
            <div className='flex items-center'>
              <CiFolderOn />
              <p className='ml-3 mr-1'>Projects</p>

              <p className='text-gray-400 text-sm flex items-center'>
                {" "}
                <LuDot /> in Team Space
              </p>
            </div>
            <div className='group-hover:flex hidden  items-center'>
              <button className='hover:bg-gray-200 mr-1 border bg-white  rounded-md'>
                <ImNewTab className=' m-1 cursor-pointer text-sm' />
              </button>
              <button className='hover:bg-gray-200 border bg-white  rounded-md'>
                <AiOutlineFullscreen className=' m-1 cursor-pointer text-sm' />
              </button>
            </div>
          </div>

          <div className='w-[98%] hover:cursor-pointer group justify-between px-2 flex items-center hover:bg-gray-100 py-1 rounded-md'>
            <div className='flex items-center'>
              <IoReorderFour />
              <p className='ml-3 mr-1'>Project 2</p>

              <p className='text-gray-400 text-sm flex items-center'>
                {" "}
                <LuDot /> in Projects
              </p>
            </div>
            <div className='group-hover:flex hidden  items-center'>
              <button className='hover:bg-gray-200 mr-1 border bg-white  rounded-md'>
                <ImNewTab className=' m-1 cursor-pointer text-sm' />
              </button>
              <button className='hover:bg-gray-200 border bg-white  rounded-md'>
                <AiOutlineFullscreen className=' m-1 cursor-pointer text-sm' />
              </button>
            </div>
          </div>

          <div className='w-[98%] hover:cursor-pointer group justify-between px-2 flex items-center hover:bg-gray-100 py-1 rounded-md'>
            <div className='flex items-center'>
              <FaUserGroup className='text-[#03a2fd]' />
              <p className='ml-3 mr-1'>Team Space</p>
            </div>
            <div className='group-hover:flex hidden  items-center'>
              <button className='hover:bg-gray-200 mr-1 border bg-white  rounded-md'>
                <ImNewTab className=' m-1 cursor-pointer text-sm' />
              </button>
              <button className='hover:bg-gray-200 border bg-white  rounded-md'>
                <AiOutlineFullscreen className=' m-1 cursor-pointer text-sm' />
              </button>
            </div>
          </div>

          <div className='w-[98%] hover:cursor-pointer group justify-between px-2 flex items-center hover:bg-gray-100 py-1 rounded-md'>
            <div className='flex items-center'>
              <BiTask />
              <p className='ml-3 mr-1'>Task 1</p>

              <p className='text-gray-400 text-sm flex items-center'>
                {" "}
                <LuDot /> in Projects
              </p>
            </div>
            <div className='group-hover:flex hidden  items-center'>
              <button className='hover:bg-gray-200 mr-1 border bg-white  rounded-md'>
                <ImNewTab className=' m-1 cursor-pointer text-sm' />
              </button>
              <button className='hover:bg-gray-200 border bg-white  rounded-md'>
                <AiOutlineFullscreen className=' m-1 cursor-pointer text-sm' />
              </button>
            </div>
          </div>

          <div className='w-[98%] hover:cursor-pointer group justify-between px-2 flex items-center hover:bg-gray-100 py-1 rounded-md'>
            <div className='flex items-center'>
              <IoReorderFour />
              <p className='ml-3 mr-1'>Project 1</p>

              <p className='text-gray-400 text-sm flex items-center'>
                {" "}
                <LuDot /> in Projects
              </p>
            </div>
            <div className='group-hover:flex hidden  items-center'>
              <button className='hover:bg-gray-200 mr-1 border bg-white  rounded-md'>
                <ImNewTab className=' m-1 cursor-pointer text-sm' />
              </button>
              <button className='hover:bg-gray-200 border bg-white  rounded-md'>
                <AiOutlineFullscreen className=' m-1 cursor-pointer text-sm' />
              </button>
            </div>
          </div>

          <div className='w-[98%] hover:cursor-pointer group justify-between px-2 flex items-center hover:bg-gray-100 py-1 rounded-md'>
            <div className='flex items-center'>
              <BiTask />
              <p className='ml-3 mr-1'>Task 3</p>

              <p className='text-gray-400 text-sm flex items-center'>
                {" "}
                <LuDot /> in Projects 2
              </p>
            </div>
            <div className='group-hover:flex hidden  items-center'>
              <button className='hover:bg-gray-200 mr-1 border bg-white  rounded-md'>
                <ImNewTab className=' m-1 cursor-pointer text-sm' />
              </button>
              <button className='hover:bg-gray-200 border bg-white  rounded-md'>
                <AiOutlineFullscreen className=' m-1 cursor-pointer text-sm' />
              </button>
            </div>
          </div>

          <div className='w-[98%] hover:cursor-pointer group justify-between px-2 flex items-center hover:bg-gray-100 py-1 rounded-md'>
            <div className='flex items-center'>
              <BiTask />
              <p className='ml-3 mr-1'>Task 3</p>

              <p className='text-gray-400 text-sm flex items-center'>
                {" "}
                <LuDot /> in Projects 1
              </p>
            </div>
            <div className='group-hover:flex hidden  items-center'>
              <button className='hover:bg-gray-200 mr-1 border bg-white  rounded-md'>
                <ImNewTab className=' m-1 cursor-pointer text-sm' />
              </button>
              <button className='hover:bg-gray-200 border bg-white  rounded-md'>
                <AiOutlineFullscreen className=' m-1 cursor-pointer text-sm' />
              </button>
            </div>
          </div>

          <div className='w-[98%] hover:cursor-pointer group justify-between px-2 flex items-center hover:bg-gray-100 py-1 rounded-md'>
            <div className='flex items-center'>
              <BiTask />
              <p className='ml-3 mr-1'>Task 2</p>

              <p className='text-gray-400 text-sm flex items-center'>
                {" "}
                <LuDot /> in Projects 1
              </p>
            </div>
            <div className='group-hover:flex hidden  items-center'>
              <button className='hover:bg-gray-200 mr-1 border bg-white  rounded-md'>
                <ImNewTab className=' m-1 cursor-pointer text-sm' />
              </button>
              <button className='hover:bg-gray-200 border bg-white  rounded-md'>
                <AiOutlineFullscreen className=' m-1 cursor-pointer text-sm' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recends
