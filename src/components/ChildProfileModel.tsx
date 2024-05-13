import * as React from "react"
import { SiAppstore } from "react-icons/si"
import { HiOutlinePencilAlt } from "react-icons/hi"
import { TbPencil } from "react-icons/tb"
import Modal from "@mui/material/Modal"
import { AiOutlineAppstoreAdd } from "react-icons/ai"
import { FaAngleRight } from "react-icons/fa"
import { SiClickup } from "react-icons/si"

type ChildProfileModelTypes = {
  expanded: boolean
}

const ChildProfileModel = ({ expanded }: ChildProfileModelTypes) => {
  const [childOpen, setChildOpen] = React.useState<any>(false)
  const handleChildOpen = () => setChildOpen(true)
  const handleChildClose = () => setChildOpen(false)

  return (
    <div className=''>
      <button
        onClick={() => {
          handleChildOpen()
        }}
        className='w-[100%] py-[6px] rounded flex justify-between items-center text-sm hover:bg-gray-200'>
        <div className='flex'>
          <AiOutlineAppstoreAdd className='mx-3' />
          <p>Apps</p>
        </div>
        <FaAngleRight />
      </button>
      <Modal
        open={childOpen}
        onClose={handleChildClose}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'>
        <div
          className={` ${
            expanded ? "top-[200px] left-[370px]" : "top-[210px] left-[445px]"
          } absolute border-none  transform -translate-x-1/2 -translate-y-1/2 items-center w-[250px] rounded-lg bg-white shadow-lg px-3 py-4`}>
          <button className='w-[100%] py-[6px] rounded flex items-center text-sm hover:bg-gray-200'>
            <SiAppstore className='mx-3 text-sm ' />
            <p>App Center</p>
          </button>
          <button className='w-[100%] py-[6px] rounded flex items-center text-sm hover:bg-gray-200'>
            <TbPencil className='mx-3 text-sm ' />
            <p>Template Center</p>
          </button>
          <button className='w-[100%] py-[6px] rounded flex items-center text-sm hover:bg-gray-200'>
            <HiOutlinePencilAlt className='mx-3 text-sm ' />
            <p>Custom Field Manager</p>
          </button>
          <button className='w-[100%] py-[6px] rounded flex items-center text-sm hover:bg-gray-200'>
            <SiClickup className='mx-3 text-sm ' />
            <p>Click Apps</p>
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default ChildProfileModel
