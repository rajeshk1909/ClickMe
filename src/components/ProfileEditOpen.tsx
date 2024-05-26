import * as React from "react"
import Modal from "@mui/material/Modal"
import { AiOutlineUser } from "react-icons/ai"
import { GiJackPlug } from "react-icons/gi"
import { IoSettingsOutline } from "react-icons/io5"
import { FaRegBell } from "react-icons/fa6"
import { MdKeyboardCommandKey, MdDeleteOutline } from "react-icons/md"
import { FaDownload, FaArrowUpRightFromSquare } from "react-icons/fa6"
import { CiGift } from "react-icons/ci"
import { IoMdHelpCircleOutline } from "react-icons/io"
import { TbLogout2 } from "react-icons/tb"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import ProfileEditOpenButton from "./ProfileEditOpenButton"

const buttons = [
  [
    {
      id: 1,
      icon: <AiOutlineUser className='text-gray-500' />,
      buttonLabel: "Profile",
      icon2: false,
    },
    {
      id: 2,
      icon: <GiJackPlug className='text-gray-500' />,
      buttonLabel: "Themes",
      icon2: false,
    },
    {
      id: 3,
      icon: <IoSettingsOutline className='text-gray-500' />,
      buttonLabel: "Settings",
      icon2: false,
    },
    {
      id: 4,
      icon: <FaRegBell className='text-gray-500' />,
      buttonLabel: "Notification Settings",
      icon2: false,
    },
  ],
  [
    {
      id: 5,
      icon: <MdKeyboardCommandKey className='text-gray-500' />,
      buttonLabel: "Hotkeys",
      icon2: false,
    },
    {
      id: 6,
      icon: <FaDownload className='text-gray-500' />,
      buttonLabel: "Download apps",
      icon2: false,
    },
    {
      id: 7,
      icon: <CiGift className='text-gray-500' />,
      buttonLabel: "Referrals",
      icon2: false,
    },
    {
      id: 8,
      icon: <IoMdHelpCircleOutline className='text-gray-500' />,
      buttonLabel: "Help",
      icon2: <FaArrowUpRightFromSquare className='text-gray-500 text-[12px]' />,
    },
  ],
  [
    {
      id: 9,
      icon: <MdDeleteOutline className='text-gray-500' />,
      buttonLabel: "Trash",
      icon2: false,
    },
    {
      id: 10,
      icon: <TbLogout2 className='text-gray-500' />,
      buttonLabel: "Logout",
      icon2: false,
    },
  ],
]

const ProfileEditOpen = () => {
  const [open, setOpen] = React.useState<boolean>(false)
  const curruntUserData = useSelector(
    (state: RootState) => state.userData.currentUserData
  )

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const name = curruntUserData?.name?.split(" ")
  const avatarName = name
    ? name.length > 1
      ? name[0].slice(0, 1) + name[1].slice(0, 1)
      : name[0].slice(0, 1)
    : ""

  return (
    <div>
      <button
        onClick={() => {
          handleOpen()
        }}
        className='hover:bg-[#a5a8bd] ml-3 flex items-center justify-center rounded-md '>
        <p className='w-5 h-5 m-1 text-[10px] capitalize rounded-[50%] bg-[#7b68ee] flex items-center justify-center'>
          {avatarName}
        </p>
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <div
          className='absolute cursor-default border-none right-[-110px] top-[260px] transform -translate-x-1/2 -translate-y-1/2 items-center
                     w-[250px] rounded-md bg-white shadow-lg'>
          <div className='flex items-center justify-center '>
            <div className='flex w-[230px] pt-3 items-center'>
              <button className='bg-[#7b68ee] rounded-[50%]'>
                <p className='text-[10px] h-8 w-8 flex items-center capitalize justify-center font-semibold text-white '>
                  {avatarName}
                </p>
              </button>
              <div className=' ml-3 '>
                <p className='font-semibold capitalize text-[14px]'>
                  {curruntUserData.name}
                </p>
                <p className='text-[12px]'>Online</p>
              </div>
            </div>
          </div>

          <div className='py-2 flex items-center flex-col'>
            {buttons[0].map((button) => (
              <ProfileEditOpenButton button={button} key={button.id} />
            ))}
          </div>

          <div className='border-y flex flex-col items-center py-2'>
            {buttons[1].map((button) => (
              <ProfileEditOpenButton button={button} key={button.id} />
            ))}
          </div>

          <div className='flex items-center flex-col py-2'>
            {buttons[2].map((button) => (
              <ProfileEditOpenButton button={button} key={button.id} />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ProfileEditOpen
