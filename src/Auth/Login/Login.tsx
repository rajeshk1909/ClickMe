import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { useState, ChangeEvent, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/clickup_logo.svg"
import { useSelector, useDispatch } from "react-redux"
import {
  setCurrentUserData,
  setIsUserLogIn,
  UserDataTypes,
} from "../../redux/features/userData"
import { RootState } from "../../redux/store/store"
import useHandleLogOut from "../../lib/useHandleLogOut"

interface ValuesType {
  email: string
  password: string
}

const Login = () => {
  const navigate = useNavigate()

  const userData = useSelector((state: RootState) => state.userData.userData)
  const currentUserData = useSelector(
    (state: RootState) => state.userData.currentUserData
  )

  const dispatch = useDispatch()

  const [values, setValues] = useState<any>({
    email: "",
    password: "",
  })

  const [userValError, setUserValError] = useState<any>({
    email: false,
    password: false,
  })

  const clearData = useHandleLogOut()
  useEffect(() => {
    if (currentUserData.email !== "") {
      clearData()
    }
  },[])

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof ValuesType
  ) => {
    let val = { ...values }
    val[key] = e.target.value
    setValues(val)

    // used regex for name and email and password
    const email = /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/
    const password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    // form validation
    if (key === "email") {
      const isvalid = email.test(e.target.value)
      setUserValError({ ...userValError, email: isvalid })
    } else if (key === "password") {
      const isvalid = password.test(e.target.value)
      setUserValError({ ...userValError, password: isvalid })
    }
  }

  const handleLogin = () => {
    const currentUser: UserDataTypes | undefined = userData.find(
      (user: UserDataTypes) => user.email === values.email
    )

    if (currentUser) {
      if (userValError.password && currentUser.password === values.password) {
        dispatch(setCurrentUserData(currentUser))
        dispatch(setIsUserLogIn(true))
        navigate("/")
      } else {
        alert("Enter correct password.")
      }
    } else {
      alert("User not found.")
    }
  }

  return (
    <div className='h-[100vh] bg-[#e5e4eb] '>
      <div className='flex mx-10 h-24 items-center justify-center sm:justify-between'>
        <img src={logo} height={40} width={125} alt='' />
        <div className='sm:flex hidden items-center'>
          <p className='pr-5 font-semibold'>Don't have an account?</p>
          <button
            onClick={() => navigate("/SignUp")}
            className=' bg-[#7b68ee] hover:bg-[#5f48ea] font-bold text-white rounded-md py-2 px-5'>
            SignUp
          </button>
        </div>
      </div>
      <div className='flex mt-10 justify-center '>
        <div className='w-[500px] px-10 py-5  bg-white  rounded-md '>
          <h1 className='my-5 text-center font-bold text-[28px] '>
            Welcome back!
          </h1>
          <Box
            component='form'
            sx={{
              "& .MuiTextField-root": {
                my: 1,
                width: "100%",
                fontSize: "14px",
              },
            }}
            noValidate>
            <div>
              <TextField
                value={values.email}
                onChange={(e) => handleOnChange(e, "email")}
                type='email'
                label='E-mail'
                autoComplete='current-email'
              />
              <TextField
                value={values.password}
                onChange={(e) => handleOnChange(e, "password")}
                type='password'
                label='Password'
                autoComplete='current-password'
              />
            </div>

            <button
              type='button'
              onClick={handleLogin}
              className=' w-[100%] bg-[#7b68ee] hover:bg-[#5f48ea] mt-1 font-bold text-white rounded-md py-3 px-5'>
              Log In
            </button>
          </Box>
        </div>
      </div>
      <p className='flex sm:hidden justify-center mt-10 '>
        Don't have an account?{" "}
        <Link className='mx-1 underline' to='/SignUp'>
          SignUp
        </Link>
      </p>
    </div>
  )
}

export default Login
