import Modal from "@mui/material/Modal"
import { IoSettingsOutline } from "react-icons/io5"
import { GiUpgrade } from "react-icons/gi"
import { FaUserGroup } from "react-icons/fa6"
import { FaPlus } from "react-icons/fa6"
import ChildProfileModel from "./ChildProfileModel"


type ProfileModelOpenPros = {
  handleClose: () => void
  open: boolean
  curruntUserData: any
  expanded: any
}

const ProfileModelOpen = ({
  expanded,
  handleClose,
  open,
  curruntUserData,
}: ProfileModelOpenPros) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <div
          className={`absolute border-none ${
            expanded ? "top-[170px] left-[130px]" : "top-[200px] left-[200px]"
          } transform -translate-x-1/2 -translate-y-1/2 items-center
                     w-[250px] rounded-lg bg-white shadow-lg px-3 py-4`}>
          <div className='flex hover:cursor-pointer items-center w-[200px]'>
            <button className=''>
              <p className='flex items-center justify-center  bg-[#b2e0e0] w-9 h-9 mr-3 rounded-md capitalize font-bold text-[14px] '>
                {curruntUserData.name.slice(0, 1)}
              </p>
            </button>
            <div className=''>
              <p className='font-semibold'>{`${curruntUserData.name}'s Workspace...`}</p>
              <p className='text-sm'>Free Forever 1 members</p>
            </div>
          </div>
          <button className='w-[100%] py-[6px] rounded flex items-center text-sm hover:bg-gray-200'>
            <IoSettingsOutline className='mx-3' />
            <p>Settings</p>
          </button>
          <button className='w-[100%] py-[6px] rounded flex items-center text-sm hover:bg-gray-200'>
            <GiUpgrade className='mx-3' />
            <p>Upgrade</p>
          </button>
          
          <ChildProfileModel expanded={expanded} />
          <button className='w-[100%] py-[6px] rounded flex items-center text-sm hover:bg-gray-200'>
            <FaUserGroup className='mx-3' />
            <p>Manage users</p>
          </button>
          <button className='w-[100%] py-[6px] rounded flex items-center text-sm hover:bg-gray-200'>
            <FaPlus className='mx-3' />
            <p>New Workspace</p>
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default ProfileModelOpen
