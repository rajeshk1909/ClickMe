import { MdPushPin } from "react-icons/md"
import GetIconComponent from "../../components/GetIconComponent"
import ButtonTooltip from "../../components/ButtonTooltip"

type buttonType = {
  handleUpdateNavbar: (id: number) => void
  button: {
    id: number
    icon: string
    buttonLabel: string
    btn: boolean
    more: boolean
  }
}

const MoreModelOpenButton = ({ handleUpdateNavbar, button }: buttonType) => {
  return (
    <button className='w-[100%] flex items-center justify-between px-2 py-[4px] hover:bg-gray-200 rounded-md'>
      <div className='flex items-center'>
        <GetIconComponent iconName={button.icon} style='' />
        <div className='ml-2 text-sm'>{button.buttonLabel}</div>
      </div>
      <ButtonTooltip
        title={`${button.btn ? "Unpin From Slidebar" : "Pin From Slidebar"}`}>
        <button
          onClick={() => handleUpdateNavbar(button.id)}
          className={` rounded-md hover:bg-gray-300 ${
            button.btn ? "text-blue-500" : ""
          } `}>
          <MdPushPin className='m-1' />
        </button>
      </ButtonTooltip>
    </button>
  )
}

export default MoreModelOpenButton
