import Modal from "@mui/material/Modal"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"

const DocsModelOpen = () => {
  const docsModel = useSelector(
    (state: RootState) => state.navbarData.docsModel
    )

  return (
    <div>
      <Modal
        open={docsModel}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <div
          className='absolute cursor-default border-none right-[-110px] top-[260px] transform -translate-x-1/2 -translate-y-1/2 items-center
                     w-[250px] rounded-md bg-white shadow-lg'>
          iokbdnndbknbfd
        </div>
      </Modal>
    </div>
  )
}

export default DocsModelOpen
