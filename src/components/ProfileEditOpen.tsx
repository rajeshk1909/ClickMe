import * as React from "react"
import Modal from "@mui/material/Modal"
import { AiOutlineUser } from "react-icons/ai"
import { GiJackPlug } from "react-icons/gi"
import { IoSettingsOutline } from "react-icons/io5"
import { FaRegBell } from "react-icons/fa6"
import { MdKeyboardCommandKey, MdDeleteOutline } from "react-icons/md"
import { FaDownload } from "react-icons/fa6"
import { CiGift } from "react-icons/ci"
import { IoMdHelpCircleOutline } from "react-icons/io"
import { TbLogout2 } from "react-icons/tb"

type ProfileEditOpenTypes = {
  curruntUserData: any
}

const ProfileEditOpen = ({ curruntUserData }: ProfileEditOpenTypes) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const name = curruntUserData.name.split(" ")
  const avatar = name[0].slice(0, 1) + name[1].slice(0, 1)

  return (
    <div>
      <button
        onClick={() => {
          handleOpen()
        }}
        className='hover:bg-[#a5a8bd] flex items-center justify-center rounded-md '>
        <p className='w-5 h-5 m-1 text-[10px] capitalize rounded-[50%] bg-[#7b68ee] flex items-center justify-center'>
          {avatar}
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
                <p className='text-[10px] h-8 w-8 flex items-center justify-center font-semibold text-white '>
                  {avatar}
                </p>
              </button>
              <div className=' ml-3 '>
                <p className='font-semibold text-[14px]'>
                  {curruntUserData.name}
                </p>
                <p className='text-[12px]'>Online</p>
              </div>
            </div>
          </div>

          <div className='py-2 flex items-center flex-col'>
            <button className='flex items-center text-[14px] px-2 w-[230px]  rounded-md hover:bg-gray-200'>
              <AiOutlineUser className='text-gray-500' />
              <p className='my-[6px] mx-3'>Profile</p>
            </button>
            <button className='flex items-center text-[14px] px-2 w-[230px]  rounded-md hover:bg-gray-200'>
              <GiJackPlug className='text-gray-500' />
              <p className='my-[6px] mx-3'>Themes</p>
            </button>
            <button className='flex items-center text-[14px] px-2 w-[230px]  rounded-md hover:bg-gray-200'>
              <IoSettingsOutline className='text-gray-500' />
              <p className='my-[6px] mx-3'>Settings</p>
            </button>
            <button className='flex items-center text-[14px] px-2 w-[230px]  rounded-md hover:bg-gray-200'>
              <FaRegBell className='text-gray-500' />
              <p className='my-[6px] mx-3'>Notification settings</p>
            </button>
          </div>

          <div className='border-y flex flex-col items-center py-2'>
            <button className='flex items-center text-[14px] px-2 w-[230px]  rounded-md hover:bg-gray-200'>
              <MdKeyboardCommandKey className='text-gray-500' />
              <p className='my-[6px] mx-3'>Hotkeys</p>
            </button>
            <button className='flex items-center text-[14px] px-2 w-[230px]  rounded-md hover:bg-gray-200'>
              <FaDownload className='text-gray-500' />
              <p className='my-[6px] mx-3'>Dwonload apps</p>
            </button>
            <button className='flex items-center text-[14px] px-2 w-[230px]  rounded-md hover:bg-gray-200'>
              <CiGift className='text-gray-500' />
              <p className='my-[6px] mx-3'>Referrals</p>
            </button>
            <button className='flex items-center text-[14px] px-2 w-[230px]  rounded-md hover:bg-gray-200'>
              <IoMdHelpCircleOutline className='text-gray-500' />
              <p className='my-[6px] mx-3'>Help</p>
            </button>
          </div>

          <div className="flex items-center flex-col py-2">
            <button className='flex items-center text-[14px] px-2 w-[230px]  rounded-md hover:bg-gray-200'>
              <MdDeleteOutline className='text-gray-500' />
              <p className='my-[6px] mx-3'>Trash</p>
            </button>
            <button className='flex items-center text-[14px] px-2 w-[230px]  rounded-md hover:bg-gray-200'>
              <TbLogout2 className='text-gray-500' />
              <p className='my-[6px] mx-3'>Logout</p>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ProfileEditOpen
