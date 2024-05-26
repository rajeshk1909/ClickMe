type buttonPropsType = {
  label: string
  index: number
  activeIndex: number
  handleButtonClick: (index: number, label:string) => void
}

const UnderlineButton = ({
  label,
  index,
  activeIndex,
  handleButtonClick,
}: buttonPropsType) => {
  return (
    <div
      key={index}
      className={`text-[14px] mr-1 border-b-[3px] font-semibold ${
        activeIndex === index
          ? "border-[#736af0] text-black"
          : "border-white text-[#8090a1]"
      }`}>
      <button
        onClick={() => handleButtonClick(index , label)}
        className='my-2 capitalize px-3 py-1 hover:bg-gray-200 hover:text-black rounded-md'>
        {label}
      </button>
    </div>
  )
}

export default UnderlineButton
