import { useDispatch } from "react-redux"
import { setCurrentUserData, setExpanded, setIsUserLogIn, setNavbar, setToggleSwitchData } from "../redux/features/userData"
import { setInBoxNav } from "../redux/features/InboxData"
import { useNavigate } from "react-router-dom"


const handleLogOut = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    dispatch(setIsUserLogIn(false))
    dispatch(setExpanded(false))
    navigate("/login")
    
    dispatch(
        setToggleSwitchData(true)
    )

    dispatch(setNavbar({
    navbarLabel: "Home",
    navbarId :1
    }))

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

export default handleLogOut