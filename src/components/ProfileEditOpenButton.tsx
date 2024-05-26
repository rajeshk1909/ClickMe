import useHandleLogOut from "../lib/useHandleLogOut"

type buttonPropsTypes = {
  button: {
    id: number
    icon: JSX.Element
    buttonLabel: string
    icon2: boolean | JSX.Element
  }
}

const ProfileEditOpenButton = ({ button }: buttonPropsTypes) => {
  const handleLogOut = useHandleLogOut()

  return (
    <button
      onClick={() => {
        if (button.id === 10) {
          handleLogOut()
        }
      }}
      className='flex items-center justify-between text-[14px] px-2 w-[230px]  rounded-md hover:bg-gray-200'>
      <div className='flex items-center'>
        {button.icon}
        <p className='my-[6px] capitalize mx-3'>{button.buttonLabel}</p>
      </div>
      {button.icon2 ? button.icon2 : ""}
    </button>
  )
}

export default ProfileEditOpenButton
