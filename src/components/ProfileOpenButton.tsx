type buttonPropsTypes = {
  icon: JSX.Element
  label: string
}

const ProfileOpenButton = ({ icon, label }: buttonPropsTypes) => {
  return (
    <button className='w-[100%] py-[6px] capitalize rounded flex items-center text-sm hover:bg-gray-200'>
      <div className='mx-3'>{icon}</div>
      <p>{label}</p>
    </button>
  )
}

export default ProfileOpenButton
