
type navButtonType = {
  title: string
  width: string
}

const DocsNavButton = ({ title, width } : navButtonType) => {
  return (
    <button
      className={`px-2 capitalize hover:text-black h-8 flex items-center justify-start hover:bg-gray-100 ${width}`}>
      {title}
    </button>
  )
}

export default DocsNavButton