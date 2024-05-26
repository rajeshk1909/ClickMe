// import { useDispatch } from "react-redux"
// import { setDocsModel } from "../redux/features/navbarData"
import ButtonTooltip from "./ButtonTooltip"
// import { useEffect } from "react"

type SlidebarButtonTypes = {
  id: number
  button: {
    id: number
    icon: JSX.Element
    buttonLabel: string
  }
  expanded: boolean
  activeIndex: number | undefined
  handleNavbar: (label: string, id: number) => void
}

const SlidebarButton = ({
  id,
  button,
  expanded,
  activeIndex,
  handleNavbar,
}: SlidebarButtonTypes) => {
  // const dispatch = useDispatch()
  // const handleOpen = () => dispatch(setDocsModel(true))
  // const handleClose = () => dispatch(setDocsModel(false))

  return (
    <ButtonTooltip title={id < 3 || id > 7 ? button.buttonLabel : ""}>
      <button
        // onMouseEnter={() => {
        //   if (id === 3) {
        //     handleOpen()
        //   }
        // }}
        // onMouseOut={() => {
        //   if (id === 3) {
        //     handleClose()
        //   }
        // }}
        onClick={() => handleNavbar(button.buttonLabel, id)}
        className={`flex items-center ${expanded ? "w-[200px]" : "w-[40px]"} ${
          activeIndex === id
            ? "bg-[#e5e4fc] hover:bg-[#e5e4fc] text-[#7670d5]"
            : "hover:bg-gray-200 bg-gray-100"
        } rounded-md my-1`}>
        {button.icon}
        <p className={`${expanded ? "font-semibold text-[12px]" : ""}`}>
          {expanded ? button.buttonLabel : ""}
        </p>
      </button>
    </ButtonTooltip>
  )
}

export default SlidebarButton
