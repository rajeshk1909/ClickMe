type buttonProps = {
  icon: JSX.Element
  label: string
  iconStyle: boolean
}

const HoverButton = ({ label, icon, iconStyle }: buttonProps) => {
  return (
    <button
      className={`flex mr-3 border rounded-md items-center ${
        iconStyle
          ? "cursor-pointer hover:bg-gray-100"
          : "cursor-not-allowed text-gray-400 "
      }`}>
      <div className='mx-2 my-1 flex items-center'>
        {icon}
        <div className='text-[14px] capitalize mx-2 mr-1 font-semibold'>
          {label}
        </div>
      </div>
    </button>
  )
}

export default HoverButton
