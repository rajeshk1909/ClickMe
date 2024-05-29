import { MdDashboard } from "react-icons/md"
import HoverButton from "../../../components/HoverButton"
import { FaSearch } from "react-icons/fa"
import Button from "../../../components/Button"

const DashboardNavbar = () => {
  return (
    <div className='flex w-[100%] justify-between items-center'>
      <div className='flex items-center'>
        <MdDashboard className='mx-2' />
        <p className='text-14px'>Dashboards</p>
      </div>
      <div className='flex items-center'>
        <HoverButton
          icon={<FaSearch />}
          iconStyle={false}
          label='search dashboards'
        />
        <div className='mx-2'>
          <Button name='new dashboard' size='15' />
        </div>
      </div>
    </div>
  )
}

export default DashboardNavbar
