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
import SlidebarButton from "./SlidebarButton"

const buttons = [
  [
    {
      id: 1,
      icon: <GoHome className='my-[6px] mx-2 cursor-pointer text-xl' />,
      buttonLabel: "Home",
    },
    {
      id: 2,
      icon: <FiInbox className='my-[6px] mx-2 cursor-pointer text-xl' />,
      buttonLabel: "Inbox",
    },
    {
      id: 3,
      icon: (
        <IoDocumentTextOutline className='my-[6px] mx-2 cursor-pointer text-xl' />
      ),
      buttonLabel: "Docs",
    },
    {
      id: 4,
      icon: <MdDashboard className='my-[6px] mx-2 cursor-pointer text-xl' />,
      buttonLabel: "Dashboards",
    },
    {
      id: 5,
      icon: <GoVideo className='my-[6px] mx-2 cursor-pointer text-xl' />,
      buttonLabel: "Clips",
    },
    {
      id: 6,
      icon: <RxLapTimer className='my-[6px] mx-2 cursor-pointer text-xl' />,
      buttonLabel: "Timesheets",
    },
    {
      id: 7,
      icon: <CgMoreO className='my-[6px] mx-2 cursor-pointer text-xl' />,
      buttonLabel: "More",
    },
  ],
  [
    {
      id: 8,
      icon: <FaRegStar className=' my-[6px] mx-2 cursor-pointer text-xl' />,
      buttonLabel: "Favorites",
    },
    {
      id: 9,
      icon: <RxDashboard className=' my-[6px] mx-2 cursor-pointer text-xl' />,
      buttonLabel: "Spaces",
    },
  ],
  [
    {
      id: 10,
      icon: (
        <BsPersonFillAdd className=' my-[6px] mx-2 cursor-pointer text-xl' />
      ),
      buttonLabel: "Invite",
    },
    {
      id: 11,
      icon: (
        <IoHelpCircleOutline className=' my-[6px] mx-2 cursor-pointer text-xl' />
      ),
      buttonLabel: "Resource center",
    },
  ],
]

const Slidebar = () => {
  const expanded: boolean = useSelector(
    (state: RootState) => state.userData.expanded
  )

  const currentUserData = useSelector(
    (state: RootState) => state.userData.currentUserData
  )

  const [open, setOpen] = React.useState<boolean>(false)
  const navbar = useSelector((state: RootState) => state.userData.navbar)
  const [activeIndex, setActiveIndex] = React.useState<number | undefined>(
    navbar ? navbar.navbarId : 1
  )

  const dispatch = useDispatch()

  const handleClose = () => setOpen(false)

  const handleProfileOpen = () => setOpen(true)

  const handleNavbar = (label: string, index: number) => {
    setActiveIndex(index)
    dispatch(
      setNavbar({
        navbarLabel: label,
        navbarId: index,
      })
    )
  }

  const handleCollapseSlidebar = () => {
    dispatch(setExpanded(!expanded))
  }

  return (
    <div>
      <div
        className={` h-[95vh] ${
          expanded ? "w-[220px]" : "w-[56px]"
        } duration-100 fixed group border-r text-xl flex justify-between items-center pb-2 bg-gray-100 flex-col`}>
        <div className='flex flex-col items-center'>
          <div
            onClick={() => {
              {
                expanded ? "" : handleProfileOpen()
              }
            }}
            className={`${
              expanded ? "w-[220px]" : "w-[56px] ml-1 hover:bg-gray-200"
            }   border-b justify-between h-[48px] flex items-center`}>
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

          <div className='flex flex-col pt-1 items-center'>
            {buttons[0].map((button) => (
              <SlidebarButton
                key={button.id}
                id={button.id}
                button={button}
                expanded={expanded}
                activeIndex={activeIndex}
                handleNavbar={handleNavbar}
              />
            ))}
            <div
              className={` ${
                expanded ? "w-[220px]" : "w-[60px]"
              } flex flex-col items-center mt-1 pt-3 border-t`}>
              {buttons[1].map((button) => (
                <SlidebarButton
                  key={button.id}
                  id={button.id}
                  button={button}
                  expanded={expanded}
                  activeIndex={activeIndex}
                  handleNavbar={handleNavbar}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className={`${
            expanded ? "w-[220px]" : "w-[60px]"
          }flex flex-col items-center `}>
          {buttons[2].map((button) => (
            <SlidebarButton
              key={button.id}
              id={button.id}
              button={button}
              expanded={expanded}
              activeIndex={activeIndex}
              handleNavbar={handleNavbar}
            />
          ))}
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
