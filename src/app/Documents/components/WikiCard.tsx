type WikiItemProps = {
  image: string
  name: string
  work: string
}

const WikiCard = ({ image, name, work}: WikiItemProps) => {
  return (
    <div className='border rounded-md flex px-3 py-2 hover:bg-gray-100 cursor-pointer '>
      <img src={image} height={40} width={40} alt={name} />
      <div className="ml-3">
        <h2 className="font-semibold">{name}</h2>
        <p className="text-xs text-gray-400">{work}</p>
      </div>
    </div>
  )
}

export default WikiCard
