import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
  setIsUserLogIn,
  setExpanded,
  setToggleSwitchData,
  setNavbar,
  setCurrentUserData,
} from "../redux/features/userData"
import { setInBoxNav } from "../redux/features/InboxData"

const useHandleLogOut = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return () => {
    dispatch(setIsUserLogIn(false))
    dispatch(setExpanded(false))
    navigate("/login")
    dispatch(setToggleSwitchData(true))

    dispatch(
      setNavbar({
        navbarLabel: "Home",
        navbarId: 1,
      })
    )

    dispatch(
      setInBoxNav({
        id: 0,
        label: "Important",
      })
    )

    dispatch(
      setCurrentUserData({
        id: "",
        name: "",
        email: "",
        password: "",
      })
    )
  }
}

export default useHandleLogOut
