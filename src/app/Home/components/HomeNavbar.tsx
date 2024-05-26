import { GoHome } from "react-icons/go"
import SettingOpen from "./SettingOpen"
import Button from "../../../components/Button"

const HomeNavbar = () => {
  return (
    <div className='flex w-[100%] items-center justify-between'>
      <p className='ml-5 flex items-center'>
        <GoHome className='mr-2' /> Home
      </p>

      <div className='flex items-center'>
        <div className='border-r hidden sm:flex pr-3'>
          <Button name="Manage card" size='16' />
        </div>
        <SettingOpen />
      </div>
    </div>
  )
}

export default HomeNavbar
