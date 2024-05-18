import * as React from "react"
import Modal from "@mui/material/Modal"
import { IoSettingsOutline } from "react-icons/io5"
import { styled } from "@mui/material/styles"
import Switch, { SwitchProps } from "@mui/material/Switch"
import { FormControlLabel } from "@mui/material"
import { setToggleSwitchData } from "../../../redux/features/userData"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store/store"

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 32,
  height: 16,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#5f55ee",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 12,
    height: 12,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}))

const SettingOpen = () => {
  const [open, setOpen] = React.useState<any>(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const dispatch = useDispatch()

  const toggleSwitch = useSelector(
    (state: RootState) => state.userData.toggleSwitch
  )

  const handleToggleSwitchData = () => {
    dispatch(setToggleSwitchData(!toggleSwitch))
  }

  return (
    <div>
      <button
        onClick={() => {
          handleOpen()
        }}
        className='hover:bg-gray-200 flex items-center justify-center rounded-md mb-1 mx-5'>
        <IoSettingsOutline className=' my-2 mx-2 cursor-pointer text-base' />
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <div
          className='absolute cursor-default border-none right-[-115px] top-[140px] transform -translate-x-1/2 -translate-y-1/2 items-center
                     w-[250px] py-3 px-5 rounded-md bg-white shadow-lg'>
          <p className='w-[230px] font-bold text-gray-500 text-[14px] '>
            Layout
          </p>
          <button className='flex w-[230px] my-2 justify-between items-center'>
            <p className='text-[14px]'>Page greeting</p>
            <FormControlLabel
              control={
                <IOSSwitch
                  onClick={() => {
                    handleToggleSwitchData()
                  }}
                  defaultChecked
                />
              }
              label=''
            />
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default SettingOpen
