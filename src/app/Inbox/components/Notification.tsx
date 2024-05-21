import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store/store"
import uparrow from "../../../assets/up_arrow.svg"

const Notification = () => {
  const inboxNav = useSelector((state: RootState) => state.inboxData.inboxNav)
  return (
    <div className='w-[100%] flex flex-col justify-center'>
      <div className='flex mt-[122px] items-center flex-col'>
        <div className='flex items-center flex-col'>
          <img src={uparrow} alt='' />
          <h1 className='font-semibold text-[18px] '>Inbox Zero</h1>
          <div className=' text-[#9a95ad]  mt-3 text-[14px]'>
            {`Congratulations! You cleared your ${inboxNav.label.toLowerCase()} notifications 🎉`}
          </div>
        </div>
        <fieldset className='flex border-t mt-20 w-[100%] text-center items-center flex-col'>
          <legend className='border rounded-[10px] text-[12px] py-[2px] text-[#9a95ad] font-semibold px-2'>
            Motivational Quote
          </legend>
          <p className='text-xl font-semibold my-10 w-[430px]'>
            Formal education will make you a living; self-education will make
            you a fortune.
          </p>
          <p className='text-[#9a95ad] text-[14px] ' >— Jim Rohn</p>
        </fieldset>
      </div>
    </div>
  )
}

export default Notification
