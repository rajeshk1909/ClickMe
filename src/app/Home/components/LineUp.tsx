import { AiOutlineFullscreen } from "react-icons/ai"
import { MdOutlineMoreHoriz } from "react-icons/md"
import tickIcon from "../../../assets/tickIcon.svg"
import Button from "../../../components/Button"
import LearnMoreButton from "../../../components/LearnMoreButton"

const LineUp = () => {
  return (
    <div className=''>
      <div className='w-[100%] h-[350px] hover:shadow-[25px] hover:border my-5 sm:pl-5 pt-5 border-2 rounded-xl '>
        <div className='flex w-[97%] justify-between items-center font-semibold '>
          <h1 className='ml-2'>Line Up</h1>
          <div className='flex items-center '>
            <AiOutlineFullscreen className=' text-gray-400 m-1 text-base' />
            <MdOutlineMoreHoriz className=' m-1 text-gray-400 text-base' />
          </div>
        </div>

        <div className='flex items-center h-[100%] justify-center'>
          <div className='flex items-center flex-col'>
            <img src={tickIcon} alt='Click Up Logo' height={80} width={80} />
            <LearnMoreButton
              btn={true}
              width='200'
              text=' LineUp keeps your most important tasks in one list. Add your most
              important task to get started.'
            />

            <div className='mt-5'>
              <Button name='+ Add Task' size='12' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LineUp
