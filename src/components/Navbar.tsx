import { GoHome } from "react-icons/go"
import { PiBookOpenTextLight } from "react-icons/pi"
import { useDispatch } from "react-redux"
import { setExpanded, userDataRootState } from "../redux/features/userData"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import SettingOpen from "./SettingOpen"
import { setToggleSwitchData } from "../redux/features/userData"

const Navbar = () => {
  const dispatch = useDispatch()

  const expanded = useSelector(
    (state: userDataRootState) => state.userData.expanded
  )

  const handleCollapseSlidebar = () => {
    dispatch(setExpanded(!expanded))
  }

  useEffect(() => {
    dispatch(setExpanded(false))
  }, [])

  

  return (
    <div
      className={` border-b h-14 items-center bg-white top-10 flex justify-between sticky`}>
      <div className='flex items-center  '>
        {!expanded ? (
          <button
            onClick={() => {
              handleCollapseSlidebar()
            }}
            className='hover:bg-gray-200 hidden sm:flex rounded-md ml-5'>
            <PiBookOpenTextLight className=' my-[6px] mx-[6px]  cursor-pointer text-xl' />
          </button>
        ) : (
          ""
        )}
        <button className='hover:bg-gray-200 sm:hidden flex rounded-md ml-5'>
          <PiBookOpenTextLight className=' my-[6px] mx-[6px]  cursor-pointer text-xl' />
        </button>
        <p className='ml-5 flex items-center'>
          <GoHome className='mr-2' /> Home
        </p>
      </div>
      <div className='flex items-center'>
        <div className='border-r hidden sm:flex pr-3'>
          <button className=' bg-[#7b68ee]  hover:bg-[#5f48ea] font-bold text-white rounded-md py-1 px-5'>
            Manage Cards
          </button>
        </div>
        <SettingOpen />
      </div>
    </div>
  )
}

export default Navbar
