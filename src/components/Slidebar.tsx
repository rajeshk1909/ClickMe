import * as React from "react"
import { PiBookOpenTextLight } from "react-icons/pi"
import { FaChevronDown } from "react-icons/fa"
import { useSelector } from "react-redux"
import { setExpanded } from "../redux/features/userData"
import { useDispatch } from "react-redux"
import ProfileModelOpen from "../components/ProfileModelOpen"
import { RootState } from "../redux/store/store"
import { useNavigate } from "react-router-dom"
import useHandleLogOut from "../lib/useHandleLogOut"
import { setNavbar } from "../redux/features/navbarData"
import DocsModelOpen from "./DocsModelOpen"
import MoreModelOpen from "../app/More/MoreModelOpen"
import SlidebarButton from "./SlidebarButton"

const Slidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogOut = useHandleLogOut()

  const currentUserData = useSelector(
    (state: RootState) => state.userData.currentUserData
  )
  const isUserLogIn = useSelector(
    (state: RootState) => state.userData.isUserLogIn
  )

  const slidebarButtons = useSelector(
    (state: RootState) => state.navbarData.slidebarButtons
  )
  // slidebar frist array fliter for initial button
  const topSlidebar = slidebarButtons[0].filter((button) => button.btn === true)

  const slidebarButtonStyle = "my-[6px] mx-2 cursor-pointer text-xl"

  React.useEffect(() => {
    dispatch(setExpanded(false))
    if (!isUserLogIn || currentUserData.email === "") {
      handleLogOut()
    }
  }, [])

  const expanded: boolean = useSelector(
    (state: RootState) => state.userData.expanded
  )


  const [open, setOpen] = React.useState<boolean>(false)
  const navbar = useSelector((state: RootState) => state.navbarData.navbar)
  const [activeIndex, setActiveIndex] = React.useState<number | undefined>(
    navbar ? navbar.navbarId : 1
  )

  const handleClose = () => setOpen(false)

  const handleProfileOpen = () => setOpen(true)

  const handleNavbar = (label: string, index: number) => {
    setActiveIndex(index)
    if (index <= 5) {
      dispatch(
        setNavbar({
          navbarLabel: label,
          navbarId: index,
        })
      )
    }

    label === "Home"
      ? navigate("/")
      : label === "Inbox"
      ? navigate("/inbox")
      : label === "Docs"
      ? navigate("/docs")
      : label === "Dashboards"
      ? navigate("/dashboard")
      : label === "Clips"
      ? navigate("/clips")
      : ""
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
            {topSlidebar.map((button) => (
              <SlidebarButton
                key={button.id}
                id={button.id}
                button={button}
                expanded={expanded}
                activeIndex={activeIndex}
                handleNavbar={handleNavbar}
                style={slidebarButtonStyle}
              />
            ))}
            <MoreModelOpen expanded={expanded} />
            <div
              className={` ${
                expanded ? "w-[220px]" : "w-[60px]"
              } flex flex-col items-center mt-1 pt-3 border-t`}>
              {slidebarButtons[1].map((button) => (
                <SlidebarButton
                  key={button.id}
                  id={button.id}
                  button={button}
                  expanded={expanded}
                  activeIndex={activeIndex}
                  handleNavbar={handleNavbar}
                  style={slidebarButtonStyle}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className={`${
            expanded ? "w-[220px]" : "w-[60px]"
          }flex flex-col items-center `}>
          {slidebarButtons[2].map((button) => (
            <SlidebarButton
              key={button.id}
              id={button.id}
              button={button}
              expanded={expanded}
              activeIndex={activeIndex}
              handleNavbar={handleNavbar}
              style={slidebarButtonStyle}
            />
          ))}
        </div>
      </div>
      <ProfileModelOpen
        expanded={expanded}
        handleClose={handleClose}
        open={open}
      />
      <DocsModelOpen />
    </div>
  )
}

export default Slidebar
