import { useState } from "react"
import UnderlineButton from "../../../components/UnderlineButton"
import { useDispatch } from "react-redux"
import HoverButton from "../../../components/HoverButton"
import { IoFilterSharp, IoSearchSharp } from "react-icons/io5"
import { setDocsNav } from "../../../redux/features/docsData"

const buttons = [
  "All",
  "my Docs",
  "Shared",
  "Private",
  "Workspace",
  "Assigned",
  "Archived",
]

const items = [
  {
    icon: <IoSearchSharp className='text-gray-500' />,
    label: "Search",
    style: false,
  },
  {
    icon: <IoFilterSharp className='text-gray-500' />,
    label: "Fillter",
    style: false,
  },
]

const DocsNav = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const dispatch = useDispatch()

  const handleButtonClick = (index: number, label: string) => {
    setActiveIndex(index)
    dispatch(
      setDocsNav({
        id: index,
        label,
      })
    )
  }
  return (
    <div className='flex min-w-[1200px] items-center justify-between mx-10  '>
      <div className='flex items-center '>
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
      <div className='flex items-center'>
        {items?.map((item, index) => (
          <HoverButton
            key={index}
            iconStyle={item.style}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  )
}

export default DocsNav
