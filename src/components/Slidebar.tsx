import { GoHome, GoVideo } from "react-icons/go"
import { PiBookOpenTextLight } from "react-icons/pi"
import { FiInbox } from "react-icons/fi"
import { IoDocumentTextOutline, IoHelpCircleOutline } from "react-icons/io5"
import { MdDashboard } from "react-icons/md"
import { RxLapTimer, RxDashboard } from "react-icons/rx"
import { CgMoreO } from "react-icons/cg"
import { FaRegStar, FaChevronDown } from "react-icons/fa"
import { BsPersonFillAdd } from "react-icons/bs"
import { useSelector } from "react-redux"
import { setExpanded, setNavbar } from "../redux/features/userData"
import { useDispatch } from "react-redux"
import ProfileModelOpen from "../components/ProfileModelOpen"
import * as React from "react"
import { RootState } from "../redux/store/store"

const Slidebar = () => {
  const expanded: any = useSelector(
    (state: RootState) => state.userData.expanded
  )

  const currentUserData = useSelector(
    (state: RootState) => state.userData.currentUserData
  )

  const [activeIndex, setActiveIndex] = React.useState<number>(0)

  const [open, setOpen] = React.useState<any>(false)

  const dispatch = useDispatch()

  const handleClose = () => setOpen(false)

  const handleProfileOpen = () => setOpen(true)

  const handleCollapseSlidebar = () => {
    dispatch(setExpanded(!expanded))
  }

  const handleNavbar = (key: string, index: number) => {
    setActiveIndex(index)
    dispatch(setNavbar(key))
  }

  const buttons = [
    {
      icon: <GoHome className='my-[6px] mx-2 cursor-pointer text-xl' />,
      buttonLabel: "Home",
    },
    {
      icon: <FiInbox className='my-[6px] mx-2 cursor-pointer text-xl' />,
      buttonLabel: "Inbox",
    },
    {
      icon: (
        <IoDocumentTextOutline className='my-[6px] mx-2 cursor-pointer text-xl' />
      ),
      buttonLabel: "Docs",
    },
    {
      icon: <MdDashboard className='my-[6px] mx-2 cursor-pointer text-xl' />,
      buttonLabel: "Dashboards",
    },
    {
      icon: <GoVideo className='my-[6px] mx-2 cursor-pointer text-xl' />,
      buttonLabel: "Clips",
    },
    {
      icon: <RxLapTimer className='my-[6px] mx-2 cursor-pointer text-xl' />,
      buttonLabel: "Timesheets",
    },
    {
      icon: <CgMoreO className='my-[6px] mx-2 cursor-pointer text-xl' />,
      buttonLabel: "More",
    },
  ]

  return (
    <div>
      <div
        className={` h-[95vh] ${
          expanded ? "w-[220px]" : "w-[60px]"
        } duration-100 fixed group border-r text-xl flex justify-between items-center pb-2 bg-gray-100 flex-col`}>
        <div className='flex flex-col items-center'>
          <div
            onClick={() => {
              {
                expanded ? "" : handleProfileOpen()
              }
            }}
            className={`${
              expanded ? "w-[220px]" : "w-[60px] ml-1 hover:bg-gray-200"
            }   border-b justify-between h-[55px] flex items-center`}>
            <button
              onClick={() => {
                {
                  expanded ? handleProfileOpen() : ""
                }
              }}
              className={` ${
                expanded ? "hover:bg-gray-200 p-1  rounded-md" : ""
              } flex cursor-pointer ml-3 items-center`}>
              <p className='flex items-center justify-center  bg-[#b2e0e0] w-6 h-6  rounded-md capitalize font-bold text-[14px] '>
                {currentUserData?.name?.slice(0, 1)}
              </p>
              <p
                className={`${
                  expanded ? "mx-1 capitalize font-semibold text-[15px]" : ""
                }`}>{`${expanded ? `${currentUserData.name}...` : ""}`}</p>
              <FaChevronDown className='text-xs mx-1' />
            </button>
            <button
              onClick={() => {
                handleCollapseSlidebar()
              }}
              className='hover:bg-gray-200 hidden sm:group-hover:flex mr-2 rounded-md'>
              <PiBookOpenTextLight className=' my-[6px] mx-[6px] cursor-pointer text-xl' />
            </button>
            <button className='hover:bg-gray-200 sm:hidden flex rounded-md ml-5'>
              <PiBookOpenTextLight className=' my-[6px] mx-[6px]  cursor-pointer text-xl' />
            </button>
          </div>

          <div className='flex flex-col items-center'>
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => {
                  handleNavbar(button.buttonLabel, index)
                }}
                className={`hover:bg-gray-200 flex items-center ${
                  expanded ? "w-[200px]" : "w-[40px]"
                } ${
                  activeIndex === index
                    ? "bg-[#e5e4fc] hover:bg-[#e5e4fc] text-[#7670d5] "
                    : ""
                } rounded-md my-1`}>
                {button.icon}
                <p
                  className={`${
                    expanded ? "font-semibold text-[14px]" : ""
                  }`}>
                  {expanded ? button.buttonLabel : ""}
                </p>
              </button>
            ))}
            <div
              className={` ${
                expanded ? "w-[220px]" : "w-[60px]"
              } flex flex-col items-center mt-1 pt-3 border-t`}>
              <button
                className={`hover:bg-gray-200 flex items-center ${
                  expanded ? "w-[200px]" : "w-[40px]"
                } rounded-md mb-1`}>
                <FaRegStar className=' my-[6px] mx-2 cursor-pointer text-xl' />
                <p
                  className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
                  {expanded ? "Favorites" : ""}
                </p>
              </button>
              <button
                className={`hover:bg-gray-200 flex items-center ${
                  expanded ? "w-[200px]" : "w-[40px]"
                } rounded-md mb-1`}>
                <RxDashboard className=' my-[6px] mx-2 cursor-pointer text-xl' />
                <p
                  className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
                  {expanded ? "Spaces" : ""}
                </p>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${
            expanded ? "w-[220px]" : "w-[60px]"
          }flex flex-col items-center `}>
          <button
            className={`hover:bg-gray-200 flex items-center w-[${
              expanded ? "200px" : "40px"
            }] rounded-md mb-1`}>
            <BsPersonFillAdd className=' my-[6px] mx-2 cursor-pointer text-xl' />
            <p className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
              {expanded ? "Invite" : ""}
            </p>
          </button>
          <button
            className={`hover:bg-gray-200 flex items-center w-[${
              expanded ? "200px" : "40px"
            }] rounded-md mb-1`}>
            <IoHelpCircleOutline className=' my-[6px] mx-2 cursor-pointer text-xl' />
            <p className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
              {expanded ? "Resource center" : ""}
            </p>
          </button>
        </div>
      </div>
      <ProfileModelOpen
        expanded={expanded}
        handleClose={handleClose}
        open={open}
      />
    </div>
  )
}

export default Slidebar
