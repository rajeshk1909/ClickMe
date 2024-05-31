import { useState } from "react"
import { FiInbox } from "react-icons/fi"
import { IoFilterSharp, IoSettingsOutline } from "react-icons/io5"
import { MdOutlineDoneAll } from "react-icons/md"
import { useDispatch } from "react-redux"
import { setInBoxNav } from "../../../redux/features/InboxData"
import UnderlineButton from "../../../components/UnderlineButton"
import HoverButton from "../../../components/HoverButton"

const items = [
  {
    icon: <IoFilterSharp />,
    label: "Filter",
    style: true,
  },
  {
    icon: <MdOutlineDoneAll />,
    label: "Clear all",
    style: false,
  },
]

const InboxNavbar = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const buttons = ["Important", "Other", "Snoozed", "Cleared"]

  const dispatch = useDispatch()

  const handleButtonClick = (index: number, label: string) => {
    setActiveIndex(index)
    dispatch(
      setInBoxNav({
        id: index,
        label,
      })
    )
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
            <UnderlineButton
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
        {items.map((item, index) => (
          <HoverButton
            key={index}
            iconStyle={item.style}
            label={item.label}
            icon={item.icon}
          />
        ))}

        <div className='border-l h-4 flex items-center pl-2'>
          <button className='hover:bg-gray-200 flex items-center justify-center rounded-md '>
            <IoSettingsOutline className=' my-2 mx-2 cursor-pointer text-base' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default InboxNavbar
