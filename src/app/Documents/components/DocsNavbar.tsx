
import { IoDocumentTextOutline, IoSearchSharp } from "react-icons/io5"
import { FaChevronDown } from "react-icons/fa"

const DocsNavbar = () => {

  return (
    <div className='flex w-[100%] mx-2 items-center justify-between '>
      <button className='flex text-[14px] items-center'>
        <IoDocumentTextOutline />
        <p className='ml-1'>Docs</p>
      </button>
      <div className='flex items-center'>
        <button className='flex border px-3 py-1 hover:bg-gray-100 mr-2 rounded-md items-center'>
          <IoSearchSharp />
          <p className='font-semibold'>search Docs</p>
        </button>
        <div className='flex text-white items-center'>
          <button className='px-3 py-1 text-[14px] bg-[#5f55ee] hover:bg-[#544dc9] font-semibold rounded-l'>
            Create Docs
          </button>
          <button className='hover:bg-[#544dc9] bg-[#5f55ee] border-l border-[#5850d6] rounded-r'>
            <p className='mx-[4px] text-[12px] my-[9px]'>
              <FaChevronDown />
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DocsNavbar
