import { FiPlusCircle } from "react-icons/fi"
import DocsNav from "./DocsNav"
import Button from "../../../components/Button"

const DocsProject = () => {
  return (
    <div className='overflow-x-auto pb-10'>
      <DocsNav />
      <div className='flex items-center min-w-[1400px] justify-center'>
        <div className='min-w-[1400px] text-[12px] border-y text-gray-400 mx-12 h-8 flex items-center'>
          <button className='px-2 hover:text-black min-w-[450px] h-8 flex items-center justify-start hover:bg-gray-100'>
            Name
          </button>
          <button className='px-2 hover:text-black min-w-[200px] h-8 flex items-center justify-start hover:bg-gray-100'>
            Location
          </button>
          <button className='px-2 hover:text-black min-w-[230px] h-8 flex items-center justify-start hover:bg-gray-100'>
            Tags
          </button>
          <button className='px-2 hover:text-black min-w-[160px] h-8 flex items-center justify-start hover:bg-gray-100'>
            Date Updated
          </button>
          <button className='px-2 hover:text-black min-w-[160px] h-8 flex items-center justify-start hover:bg-gray-100'>
            Data viewed
          </button>
          <button className='px-2 hover:text-black min-w-[160px] h-8 flex items-center justify-start hover:bg-gray-100'>
            Sharing
          </button>
          <button className='h-7 flex items-center justify-center rounded hover:bg-gray-100 min-w-8'>
            <FiPlusCircle className='text-base text-black ' />
          </button>
        </div>
      </div>
      <div className="w-[100%] h-[350px] flex items-center justify-center flex-col">
        <img
          src='https://app-cdn.clickup.com/no-my-pages.caf3e5fbd981952e2b5eee19b862d8a4.svg'
          alt=''
        />
        <div className="font-semibold text-[18px]">Let's create your first ClickUp Doc!</div>
        <div className="w-[500px] text-center my-5 text-[12px]">
          Create anything from project plans to knowledge bases with Docs. Embed
          tasks and dashboards, assign comments, and more. Learn more
        </div>
        <Button name="Create Docs" size='14' />
      </div>
    </div>
  )
}

export default DocsProject
