type buttonPropsType = {
  label: string
  index: number
  activeIndex: number
  handleButtonClick: (index: number, label:string) => void
}

const InboxNavbarButton = ({
  label,
  index,
  activeIndex,
  handleButtonClick,
}: buttonPropsType) => {
  return (
    <div
      key={index}
      className={`text-[14px] border-b-[3px] font-semibold ${
        activeIndex === index
          ? "border-[#736af0] text-black"
          : "border-white text-[#8090a1]"
      }`}>
      <button
        onClick={() => handleButtonClick(index , label)}
        className='my-2 px-3 py-1 hover:bg-gray-200 rounded-md'>
        {label}
      </button>
    </div>
  )
}

export default InboxNavbarButton
