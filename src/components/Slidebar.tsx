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

  const [open, setOpen] = React.useState<any>(false)

  const dispatch = useDispatch()

  const handleClose = () => setOpen(false)

  const handleProfileOpen = () => setOpen(true)

  const handleCollapseSlidebar = () => {
    dispatch(setExpanded(!expanded))
  }

  const handleNavbar = (key: string) => {
    dispatch(setNavbar(key))
  }

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
            <button
              onClick={() => {
                handleNavbar("home")
              }}
              className={`bg-[#e5e4fc] flex items-center ${
                expanded ? "w-[200px]" : "w-[40px]"
              }  rounded-md my-1`}>
              <GoHome className=' my-[6px] mx-[8px] cursor-pointer text-[#7670d5] text-xl' />
              <p
                className={`${
                  expanded ? "font-semibold text-[14px] text-[#7670d5] " : ""
                }`}>
                {expanded ? "Home" : ""}
              </p>
            </button>
            <button
              onClick={() => {
                handleNavbar("inbox")
              }}
              className={`hover:bg-gray-200 flex items-center ${
                expanded ? "w-[200px]" : "w-[40px]"
              } rounded-md mb-1`}>
              <FiInbox className=' my-[6px] mx-2 cursor-pointer text-xl' />
              <p className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
                {expanded ? "Inbox" : ""}
              </p>
            </button>
            <button
              onClick={() => {
                handleNavbar("docs")
              }}
              className={`hover:bg-gray-200 flex items-center ${
                expanded ? "w-[200px]" : "w-[40px]"
              } rounded-md mb-1`}>
              <IoDocumentTextOutline className=' my-[6px] mx-2 cursor-pointer text-xl' />
              <p className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
                {expanded ? "Docs" : ""}
              </p>
            </button>
            <button
              onClick={() => {
                handleNavbar("dashboards")
              }}
              className={`hover:bg-gray-200 flex items-center ${
                expanded ? "w-[200px]" : "w-[40px]"
              } rounded-md mb-1`}>
              <MdDashboard className=' my-[6px] mx-2 cursor-pointer text-xl' />
              <p className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
                {expanded ? "Dashboards" : ""}
              </p>
            </button>
            <button
              onClick={() => {
                handleNavbar("clips")
              }}
              className={`hover:bg-gray-200 flex items-center ${
                expanded ? "w-[200px]" : "w-[40px]"
              } rounded-md mb-1`}>
              <GoVideo className=' my-[6px] mx-2 cursor-pointer text-xl' />
              <p className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
                {expanded ? "Clips" : ""}
              </p>
            </button>
            <button
              onClick={() => {
                handleNavbar("timesheets")
              }}
              className={`hover:bg-gray-200 flex items-center ${
                expanded ? "w-[200px]" : "w-[40px]"
              } rounded-md mb-1`}>
              <RxLapTimer className=' my-[6px] mx-2 cursor-pointer text-xl' />
              <p className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
                {expanded ? "Timesheets" : ""}
              </p>
            </button>
            <button
              className={`hover:bg-gray-200 flex items-center ${
                expanded ? "w-[200px]" : "w-[40px]"
              } rounded-md mb-1`}>
              <CgMoreO className=' my-[6px] mx-2 cursor-pointer text-xl' />
              <p className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
                {expanded ? "More" : ""}
              </p>
            </button>
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
