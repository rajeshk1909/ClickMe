type buttonPropsTypes = {
  button: {
    icon: JSX.Element
  }
}

const TopNavbarButton = ({ button }: buttonPropsTypes) => {
  return (
    <button className='hover:bg-[#a5a8bd] ml-2 rounded-md '>
      {button.icon}
    </button>
  )
}

export default TopNavbarButton
