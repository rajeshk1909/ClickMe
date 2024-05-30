import Modal from "@mui/material/Modal"
import { IoSettingsOutline } from "react-icons/io5"
import { GiUpgrade } from "react-icons/gi"
import { FaUserGroup } from "react-icons/fa6"
import { FaPlus } from "react-icons/fa6"
import ChildProfileModel from "./ChildProfileModel"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import ProfileOpenButton from "./ProfileOpenButton"

type ProfileModelOpenPros = {
  handleClose: () => void
  open: boolean
  expanded: boolean
}

const buttons = [
  [
    { id: 1, label: "Settings", icon: <IoSettingsOutline /> },
    { id: 2, label: "Upgrade", icon: <GiUpgrade /> },
  ],
  [
    { id: 4, label: "Manage users", icon: <FaUserGroup /> },
    { id: 5, label: "New Workspace", icon: <FaPlus /> },
  ],
]

const ProfileModelOpen = ({
  expanded,
  handleClose,
  open,
}: ProfileModelOpenPros) => {
  const currentUserData = useSelector(
    (state: RootState) => state.userData.currentUserData
  )

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
                {currentUserData?.name?.slice(0, 1)}
              </p>
            </button>
            <div className=''>
              <p className='font-semibold'>{`${currentUserData.name}'s Workspace...`}</p>
              <p className='text-sm'>Free Forever 1 members</p>
            </div>
          </div>
          {buttons[0].map((btn) => (
            <ProfileOpenButton icon={btn.icon} label={btn.label} key={btn.id} />
          ))}
          <ChildProfileModel expanded={expanded} />
          {buttons[1].map((btn) => (
            <ProfileOpenButton icon={btn.icon} label={btn.label} key={btn.id} />
          ))}
        </div>
      </Modal>
    </div>
  )
}

export default ProfileModelOpen
