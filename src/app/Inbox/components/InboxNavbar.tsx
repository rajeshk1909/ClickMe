import { useState } from "react"
import { FiInbox } from "react-icons/fi"
import InboxNavbarButton from "./InboxNavbarButton"
import { IoFilterSharp, IoSettingsOutline } from "react-icons/io5"
import { MdOutlineDoneAll } from "react-icons/md"

const InboxNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const buttons = ["Important", "Other", "Snoozed", "Cleared"]

  const handleButtonClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className='flex mx-5 w-[100%] items-center justify-between'>
      <div className='flex items-center'>
        <p className='flex cursor-pointer text-[14px] mr-3 items-center'>
          <FiInbox className='mr-2' />
          Inbox
        </p>
        <div className='flex items-center h-5 px-3 border-l'>
          {buttons?.map((label, index) => (
            <InboxNavbarButton
              label={label}
              activeIndex={activeIndex}
              key={index}
              index={index}
              handleButtonClick={handleButtonClick}
            />
          ))}
        </div>
      </div>
      <div className='flex items-center'>
        <button className='flex hover:bg-gray-100 rounded-md items-center'>
          <p className='mx-2 my-1 flex items-center'>
            <IoFilterSharp className='text-gray-500' />
            <p className='text-[14px] mx-2 mr-1 font-semibold'> Filter </p>
          </p>
        </button>
        <button className='flex text-gray-400 hover:cursor-not-allowed rounded-md items-center'>
          <p className='mx-2 my-1 flex items-center'>
            <MdOutlineDoneAll className='' />
            <p className='text-[14px] mx-2 mr-1 font-semibold'> Clear all </p>
          </p>
        </button>
        <div className="border-l h-4 flex items-center pl-2">
          <button className='hover:bg-gray-200 flex items-center justify-center rounded-md '>
            <IoSettingsOutline className=' my-2 mx-2 cursor-pointer text-base' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default InboxNavbar
