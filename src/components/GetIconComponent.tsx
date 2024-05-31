import { GoHome } from "react-icons/go"
import { FiInbox } from "react-icons/fi"
import { IoDocumentTextOutline, IoHelpCircleOutline } from "react-icons/io5"
import { MdOutlineDashboard } from "react-icons/md"
import { GoVideo } from "react-icons/go"
import { RxLapTimer, RxDashboard } from "react-icons/rx"
import { FaRegStar } from "react-icons/fa"
import { BsPersonFillAdd, BsTrophy } from "react-icons/bs"
import { FaRegClipboard } from "react-icons/fa6"
import { IoMdWifi } from "react-icons/io"

interface GetIconComponentProps {
  iconName: string
  style: string
}

const GetIconComponent = ({ iconName, style }: GetIconComponentProps) => {
  const icons: Record<string, JSX.Element> = {
    GoHome: <GoHome className={style} />,
    FiInbox: <FiInbox className={style} />,
    IoDocumentTextOutline: <IoDocumentTextOutline className={style} />,
    MdOutlineDashboard: <MdOutlineDashboard className={style} />,
    GoVideo: <GoVideo className={style} />,
    RxLapTimer: <RxLapTimer className={style} />,
    FaRegStar: <FaRegStar className={style} />,
    RxDashboard: <RxDashboard className={style} />,
    BsPersonFillAdd: <BsPersonFillAdd className={style} />,
    IoHelpCircleOutline: <IoHelpCircleOutline className={style} />,
    FaRegClipboard: <FaRegClipboard className={style} />,
    IoMdWifi: <IoMdWifi className={style} />,
    BsTrophy: <BsTrophy className={style} />,
  }

  return icons[iconName] || null
}

export default GetIconComponent
