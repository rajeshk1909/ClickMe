import { FiPlusCircle } from "react-icons/fi"
import DocsNav from "./DocsNav"
import Button from "../../../components/Button"
import DocsNavButton from "./DocsNavButton"
import LearnMoreButton from "../../../components/LearnMoreButton"

const buttons = [
  {
    title: "Name",
    width: "min-w-[450px]",
  },
  {
    title: "Location",
    width: "min-w-[200px]",
  },
  {
    title: "Tags",
    width: "min-w-[230px]",
  },
  {
    title: "Date Updated",
    width: "min-w-[160px]",
  },
  {
    title: "Data viewed",
    width: "min-w-[160px]",
  },
  {
    title: "Name",
    width: "min-w-[160px]",
  },
]

const DocsProject = () => {
  return (
    <div className='overflow-x-auto pb-10'>
      <DocsNav />
      <div className='flex items-center min-w-[1400px] justify-center'>
        <div className='min-w-[1390px] text-[12px] border-y text-gray-400 mx-12 h-8 flex items-center'>
          {buttons.map((button) => (
            <DocsNavButton title={button.title} width={button.width} />
          ))}
          <button className='h-7 flex items-center justify-center rounded hover:bg-gray-100 min-w-8'>
            <FiPlusCircle className='text-base text-black ' />
          </button>
        </div>
      </div>
      <div className='w-[100%] h-[350px] flex items-center justify-center flex-col'>
        <img
          src='https://app-cdn.clickup.com/no-my-pages.caf3e5fbd981952e2b5eee19b862d8a4.svg'
          alt=''
        />
        <div className='font-semibold text-[18px]'>
          Let's create your first ClickUp Doc!
        </div>
        <LearnMoreButton
          btn={true}
          text='Create anything from project plans to knowledge bases with Docs. Embed
          tasks and dashboards, assign comments, and more. '
          width='500'
        />
        <Button name='Create Docs' size='14' />
      </div>
    </div>
  )
}

export default DocsProject
