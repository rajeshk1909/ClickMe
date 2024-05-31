import * as React from "react"
import Modal from "@mui/material/Modal"
import ButtonTooltip from "../../components/ButtonTooltip"
import { CgMoreO } from "react-icons/cg"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"
import MoreModelOpenButton from "./MoreModelOpenButton"
import { setSlidebarButtons } from "../../redux/features/navbarData"
import { useDispatch } from "react-redux"

type MoreModelOpenPropsTypes = {
  expanded: boolean
}

const MoreModelOpen = ({ expanded }: MoreModelOpenPropsTypes) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const dispatch = useDispatch()

  const slidebarButtons = useSelector(
    (state: RootState) => state.navbarData.slidebarButtons
  )

  const slidebar = slidebarButtons[0]

  const moreButtons = slidebarButtons[0].filter(
    (button) => button.more === true
  )

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleUpdateNavbar = (id: number) => {
    const updatedSlidebar = slidebar.map((button) => {
      if (button.id === id) {
        return { ...button, btn: !button.btn }
      }
      return button
    })

    const newUpdatedData = [
      [...updatedSlidebar],
      [...slidebarButtons[1]],
      [...slidebarButtons[2]],
    ]
    dispatch(setSlidebarButtons(newUpdatedData))
  }

  return (
    <div>
      <ButtonTooltip title='More'>
        <button
          onClick={() => handleOpen()}
          className={`flex items-center hover:bg-gray-200 ${
            open ? "bg-gray-200" : ""
          } ${expanded ? "w-[200px]" : "w-[40px]"} rounded-md my-1`}>
          <CgMoreO className='my-[6px] mx-2 cursor-pointer text-xl' />
          <p
            className={` capitalize ${
              expanded ? "font-semibold text-[14px]" : ""
            }`}>
            {expanded ? "More" : ""}
          </p>
        </button>
      </ButtonTooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <div
          className='absolute cursor-default p-[8px] border-none left-[190px] top-[450px] transform -translate-x-1/2 -translate-y-1/2 items-center
                     w-[250px] rounded-md bg-white shadow-lg'>
          {moreButtons.map((button) => (
            <MoreModelOpenButton
              key={button.id}
              handleUpdateNavbar={handleUpdateNavbar}
              button={button}
            />
          ))}
        </div>
      </Modal>
    </div>
  )
}

export default MoreModelOpen
