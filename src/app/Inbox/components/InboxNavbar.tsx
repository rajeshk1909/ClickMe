import { useState } from "react"
import { FiInbox } from "react-icons/fi"

const InboxNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const buttons = ["Important", "Other", "Snoozed", "Cleared"]

  const handleButtonClick = (index : number) => {
    setActiveIndex(index)
  }

  return (
    <div className='flex mx-5 items-center justify-between'>
      <div className='flex items-center'>
        <p className='flex text-[14px] mr-3 items-center'>
          <FiInbox className='mr-2' />
          Inbox
        </p>
        <div className='flex items-center h-5 px-3 border-l'>
          {buttons.map((label, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`text-[14px] border-b-2 font-semibold ${
                activeIndex === index
                  ? "border-[#736af0] text-black"
                  : "border-white text-[#8090a1]"
              }`}>
              <p className='my-3 px-3 py-1 hover:bg-gray-200 rounded-md'>
                {label}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InboxNavbar
