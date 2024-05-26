import { ImNewTab } from "react-icons/im"
import { AiOutlineFullscreen } from "react-icons/ai"
import { LuDot } from "react-icons/lu"

type buttonPropsType = {
  icon: JSX.Element
  label: string
  sublabel: string
}

const RecentsButton = ({ icon, label, sublabel }: buttonPropsType) => {
  return (
    <div className='w-[98%] hover:cursor-pointer group justify-between px-2 flex items-center hover:bg-gray-100 py-1 rounded-md'>
      <div className='flex items-center'>
        {icon}
        <p className='ml-3 capitalize mr-1'>{label}</p>
        {sublabel && (
          <p className='text-gray-400 capitalize text-sm flex items-center'>
            <LuDot /> {sublabel}
          </p>
        )}
      </div>
      <div className='group-hover:flex hidden items-center'>
        <button className='hover:bg-gray-200 mr-1 border bg-white rounded-md'>
          <ImNewTab className='m-1 cursor-pointer text-sm' />
        </button>
        <button className='hover:bg-gray-200 border bg-white rounded-md'>
          <AiOutlineFullscreen className='m-1 cursor-pointer text-sm' />
        </button>
      </div>
    </div>
  )
}

export default RecentsButton
