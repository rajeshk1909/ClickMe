type SlidebarButtonTypes = {
  id: number
  button: {
    id:number
    icon: JSX.Element
    buttonLabel: string
  }
  expanded: boolean
  activeIndex: number
  handleNavbar: (label: string, id: number) => void
}

const SlidebarButton = ({
  id,
  button,
  expanded,
  activeIndex,
  handleNavbar,
}: SlidebarButtonTypes) => {
  return (
    <button
      onClick={() => handleNavbar(button.buttonLabel, id)}
      className={`flex items-center ${expanded ? "w-[200px]" : "w-[40px]"} ${
        activeIndex === id
          ? "bg-[#e5e4fc] hover:bg-[#e5e4fc] text-[#7670d5]"
          : "hover:bg-gray-200 bg-gray-100"
      } rounded-md my-1`}>
      {button.icon}
      <p className={`${expanded ? "font-semibold text-[14px]" : ""}`}>
        {expanded ? button.buttonLabel : ""}
      </p>
    </button>
  )
}

export default SlidebarButton
