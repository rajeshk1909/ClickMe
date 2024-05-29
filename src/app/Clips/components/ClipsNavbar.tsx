import {  GoVideo } from "react-icons/go"
import Button from "../../../components/Button"

const ClipsNavbar = () => {
  return (
    <div className='flex mx-2 items-center justify-between w-[100%]'>
          <div className="flex items-center">
              <GoVideo />
              <p className="text-sm mx-2">Clips</p>
      </div>
          <div>
              <Button name="New Clip" size="14" />
      </div>
    </div>
  )
}

export default ClipsNavbar
