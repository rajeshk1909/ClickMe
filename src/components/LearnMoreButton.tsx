type learnMorePropsTypes = {
  width: string
  text: string
  btn: boolean
}

const LearnMoreButton = ({ width, text, btn }: learnMorePropsTypes) => {
  return (
    <div className={`w-[${width}px] cursor-default mt-4 mb-6 text-[12px] text-center `}>
      {text}
      {btn && (
        <span className='text-blue-500 hover:border-b hover:cursor-pointer border-blue-500'>
          Learn more
        </span>
      )}
    </div>
  )
}

export default LearnMoreButton
