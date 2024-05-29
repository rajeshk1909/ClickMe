import { FiPlus } from "react-icons/fi"

type CartDataPropsTypes = {
  src: string
  title: string
  text: string
}

const DashboardCard = ({ src, title, text }: CartDataPropsTypes) => {
  const isEmpty = src === ""

  return (
    <div>
      {!isEmpty && (
        <div className='border w-[250px] cursor-pointer hover:bg-gray-100 rounded-xl mx-1 h-[160px] pt-3 mb-2 px-3'>
          <img src={src} alt={title} />
          <div className='font-semibold capitalize mt-3 mb-2'>{title}</div>
          <div className='w-[220px] text-[14px] text-[#2a2e34]'>{text}</div>
        </div>
      )}
      {isEmpty && (
        <div
          className='border w-[250px] cursor-pointer hover:bg-gray-100 flex items-center flex-col border-dashed bg-gray-50 border-gray-300 rounded-xl
               mx-1 h-[160px] pt-3 mb-2  px-3 '>
          <div className='  text-[30px] mt-8 rounded-md bg-gray-100'>
            <FiPlus className='mx-1 text-gray-600 my-[2px]' />
          </div>
          <div className='capitalize mt-3 font-semibold text-gray-400 '>{title}</div>
        </div>
      )}
    </div>
  )
}

export default DashboardCard
