import { PiBookOpenTextLight } from "react-icons/pi"
import { useDispatch } from "react-redux"
import { setExpanded } from "../redux/features/userData"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import HomeNavbar from "../app/Home/components/HomeNavbar"
import InboxNavbar from "../app/Inbox/components/InboxNavbar"

const Navbar = () => {
  const dispatch = useDispatch()

  const expanded = useSelector((state: RootState) => state.userData.expanded)
  const navbar = useSelector((state: RootState) => state.userData.navbar)

  const handleCollapseSlidebar = () => {
    dispatch(setExpanded(!expanded))
  }

  return (
    <div className='border-b h-14 items-center bg-white top-10 flex sticky'>
      <div className='flex items-center '>
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
      </div>

      {navbar === "home" ? (
        <HomeNavbar />
      ) : navbar === "inbox" ? (
        <InboxNavbar />
      ) : (
        ""
      )}
    </div>
  )
}

export default Navbar
