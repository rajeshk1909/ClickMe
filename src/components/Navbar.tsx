import { GoHome } from "react-icons/go"
import { IoSettingsOutline } from "react-icons/io5"
import { PiBookOpenTextLight } from "react-icons/pi"
import { useDispatch } from "react-redux"
import { setExpanded, userDataRootState } from "../redux/features/userData"
import { useSelector } from "react-redux"
import { useEffect } from "react"

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
      className={` border-b h-14 items-center flex justify-between sticky z-10`}>
      <div className='flex items-center  '>
        <button className='hover:bg-gray-200 rounded-md ml-5'>
          <PiBookOpenTextLight
            onClick={() => {
              handleCollapseSlidebar()
            }}
            className=' my-[6px] mx-[6px]  cursor-pointer text-xl'
          />
        </button>
        <p className='ml-5 flex items-center'>
          <GoHome className='mr-2' /> Home
        </p>
      </div>
      <div className='flex items-center'>
        <div className='border-r pr-3'>
          <button className=' bg-[#7b68ee]  hover:bg-[#5f48ea] font-bold text-white rounded-md py-1 px-5'>
            {" "}
            Manage Cards
          </button>
        </div>
        <button className='hover:bg-gray-200 rounded-md mb-1 mx-5'>
          <IoSettingsOutline className=' my-[6px] mx-[6px] cursor-pointer text-xl' />
        </button>
      </div>
    </div>
  )
}

export default Navbar
