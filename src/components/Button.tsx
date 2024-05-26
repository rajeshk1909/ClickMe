type buttonTypeProps = {
    name: string
    size:string
} 

const Button = ({ name, size }: buttonTypeProps) => {
  return (
    <button
      className={`bg-[#7b68ee] hover:bg-[#5f48ea] font-semibold text-white rounded-md py-1 px-5 text-[${size}px]`}>
      {name}
    </button>
  )
}

export default Button