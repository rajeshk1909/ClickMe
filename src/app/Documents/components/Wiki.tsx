import WikiItems from "./WikiCard"

const items = [
  {
    src: "https://app-cdn.clickup.com/blank-wiki.8aaa0583e7135e2d04571812c0b8285f.svg",
    name: "Company Wiki",
    work: "All-in-one wiki",
  },
  {
    src: "https://app-cdn.clickup.com/company-home.e805ec42a0c4a14c55c1e8500534c819.svg",
    name: "Company Home",
    work: "Company intranet hub",
  },
  {
    src: "https://app-cdn.clickup.com/knowledge-base.1b8b9a509a3d70e3587e559c6cd4bb72.svg",
    name: "Knowledge Base",
    work: "Company knowledge center",
  },
  {
    src: "https://app-cdn.clickup.com/team-hub.2a04aebcc17cad83bc7d90ca7d2d4a7d.svg",
    name: "Team Hub",
    work: "team collaboration center",
  },
]

const wiki = () => {
  return (
    <div className='border  mx-10 rounded-lg p-5 my-5'>
      <div className='flex items-center mb-5 justify-between'>
        <p className="font-semibold">Create frist wiki</p>
        <p className='text-[13px] cursor-default'>
          Use wikis to organize information, and prioritize it as results when
          you Ask AI. You can
          <span className='border-b-black mx-[3px] border-b cursor-pointer'>
            create a new wiki
          </span>
          or
          <span className='border-b-black mx-[3px] border-b cursor-pointer'>
            import from Confluence.
          </span>
        </p>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
        {items.map((item, index) => (
          <WikiItems
            key={index}
            image={item.src}
            name={item.name}
            work={item.work}
          />
        ))}
      </div>
    </div>
  )
}

export default wiki
