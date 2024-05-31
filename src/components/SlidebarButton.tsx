import ButtonTooltip from "./ButtonTooltip"
import GetIconComponent from "./GetIconComponent"

type buttonType = {
    id: number
    icon: string
    buttonLabel: string
  }

type SlidebarButtonTypes = {
  id: number
  button: buttonType
  expanded: boolean
  activeIndex: number | undefined
  handleNavbar: (label: string, id: number) => void
  style: string
}

const SlidebarButton = ({
  id,
  button,
  expanded,
  activeIndex,
  handleNavbar,
  style,
}: SlidebarButtonTypes) => {

  return (
    <ButtonTooltip title={ button.buttonLabel}>
      <button
        onClick={() => handleNavbar(button.buttonLabel, id)}
        className={`flex items-center ${expanded ? "w-[200px]" : "w-[40px]"} ${
          activeIndex === id
            ? "bg-[#e5e4fc] hover:bg-[#e5e4fc] text-[#7670d5]"
            : "hover:bg-gray-200 bg-gray-100"
        } rounded-md my-1`}>
        <GetIconComponent iconName={button.icon} style={style} />
        <p
          className={` capitalize ${
            expanded ? "font-semibold text-[14px]" : ""
          }`}>
          {expanded ? button.buttonLabel : ""}
        </p>
      </button>
    </ButtonTooltip>
  )
}

export default SlidebarButton
