import { GoHome, GoVideo } from "react-icons/go"
import { FiInbox } from "react-icons/fi"
import { IoDocumentTextOutline, IoHelpCircleOutline } from "react-icons/io5"
import { MdDashboard } from "react-icons/md"
import { RxLapTimer, RxDashboard } from "react-icons/rx"
import { CgMoreO } from "react-icons/cg"
import { FaRegStar, FaChevronDown } from "react-icons/fa"
import { BsPersonFillAdd } from "react-icons/bs"
import { useSelector } from "react-redux"
import { userDataRootState } from "../redux/features/userData"

type SlidebarProps = {
  curruntUserData: any
}

const Slidebar = ({ curruntUserData }: SlidebarProps) => {
  const expanded = useSelector(
    (state: userDataRootState) => state.userData.expanded
  )

  return (
    <div
      className={` h-[100vh] ${
        expanded ? "w-[220px]" : "w-[60px]"
      } fixed border-r text-xl flex justify-between items-center py-2 bg-gray-100 flex-col`}>
      <div className='flex flex-col items-center'>
        <button
          className={` h-[48px] ${
            expanded ? "w-[200px]" : "w-[40px]"
          } flex cursor-pointer ml-2 pb-2 items-center border-b`}>
          <p className='flex items-center justify-center  bg-[#b2e0e0] w-6 h-6  rounded-md capitalize font-bold text-[14px] '>
            {curruntUserData.name.slice(0, 1)}
          </p>
          <p
            className={`${
              expanded ? "mx-1 capitalize font-semibold text-[15px]" : ""
            }`}>{`${expanded ? `${curruntUserData.name}...` : ""}`}</p>
          <FaChevronDown className='text-xs mx-1' />
        </button>

        <div className={` flex flex-col items-center`}>
          <button
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
            className={`hover:bg-gray-200 flex items-center ${
              expanded ? "w-[200px]" : "w-[40px]"
            } rounded-md mb-1`}>
            <FiInbox className=' my-[6px] mx-2 cursor-pointer text-xl' />
            <p className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
              {expanded ? "Inbox" : ""}
            </p>
          </button>
          <button
            className={`hover:bg-gray-200 flex items-center ${
              expanded ? "w-[200px]" : "w-[40px]"
            } rounded-md mb-1`}>
            <IoDocumentTextOutline className=' my-[6px] mx-2 cursor-pointer text-xl' />
            <p className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
              {expanded ? "Docs" : ""}
            </p>
          </button>
          <button
            className={`hover:bg-gray-200 flex items-center ${
              expanded ? "w-[200px]" : "w-[40px]"
            } rounded-md mb-1`}>
            <MdDashboard className=' my-[6px] mx-2 cursor-pointer text-xl' />
            <p className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
              {expanded ? "Dashboards" : ""}
            </p>
          </button>
          <button
            className={`hover:bg-gray-200 flex items-center ${
              expanded ? "w-[200px]" : "w-[40px]"
            } rounded-md mb-1`}>
            <GoVideo className=' my-[6px] mx-2 cursor-pointer text-xl' />
            <p className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
              {expanded ? "Clips" : ""}
            </p>
          </button>
          <button
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
          <div className={` flex flex-col items-center mt-1 pt-3 border-t`}>
            <button
              className={`hover:bg-gray-200 flex items-center ${
                expanded ? "w-[200px]" : "w-[40px]"
              } rounded-md mb-1`}>
              <FaRegStar className=' my-[6px] mx-2 cursor-pointer text-xl' />
              <p className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
                {expanded ? "Favorites" : ""}
              </p>
            </button>
            <button
              className={`hover:bg-gray-200 flex items-center ${
                expanded ? "w-[200px]" : "w-[40px]"
              } rounded-md mb-1`}>
              <RxDashboard className=' my-[6px] mx-2 cursor-pointer text-xl' />
              <p className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
                {expanded ? "Spaces" : ""}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className={` flex flex-col items-center`}>
        <button
          className={`hover:bg-gray-200 flex items-center w-[${
            expanded ? "200px" : "60px"
          }] rounded-md mb-1`}>
          <BsPersonFillAdd className=' my-[6px] mx-2 cursor-pointer text-xl' />
          <p className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
            {expanded ? "Invite" : ""}
          </p>
        </button>
        <button
          className={`hover:bg-gray-200 flex items-center w-[${
            expanded ? "200px" : "60px"
          }] rounded-md mb-1`}>
          <IoHelpCircleOutline className=' my-[6px] mx-2 cursor-pointer text-xl' />
          <p className={`${expanded ? "font-semibold text-[14px] " : ""}`}>
            {expanded ? "Resource center" : ""}
          </p>
        </button>
      </div>
    </div>
  )
}

export default Slidebar
