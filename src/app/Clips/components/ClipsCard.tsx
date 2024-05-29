
type clipsDatapropsTypes = {
    src:string
    title: string,
    text:string
}

const ClipsCard = ({ src, title, text }: clipsDatapropsTypes) => {
  return (
    <div className='border p-4 w-[424px] rounded-xl cursor-pointer'>
      <div className='font-semibold mb-2'>{title}</div>
      <div className='text-sm mb-4'>{text}</div>
      <div className='h-[250px]'>
        <img src={src} alt='' height={250} width={400} />
      </div>
    </div>
  )
}

export default ClipsCard