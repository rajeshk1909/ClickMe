import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { useState, ChangeEvent, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/clickup_logo.svg"
import { useSelector, useDispatch } from "react-redux"
import {
  setCurrentUserData,
  setIsUserLogIn,
  setUserData,
  UserDataTypes,
} from "../../redux/features/userData"
import { RootState } from "../../redux/store/store"
import useHandleLogOut from "../../lib/useHandleLogOut"

const SignUp = () => {
  const navigate = useNavigate()
  const currentUserData = useSelector(
    (state: RootState) => state.userData.currentUserData
  )
  const userData = useSelector((state: RootState) => state.userData.userData)

  const dispatch = useDispatch()

  interface ValuesType {
    name: string
    email: string
    password: string
  }

  const [values, setValues] = useState<ValuesType>({
    name: "",
    email: "",
    password: "",
  })

  const [userValError, setUserValError] = useState<{
    name: boolean
    email: boolean
    password: boolean
  }>({
    name: false,
    email: false,
    password: false,
  })

  const clearData = useHandleLogOut()
  useEffect(() => {
    if (currentUserData.email !== "") {
      clearData()
    }
  })

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof ValuesType
  ) => {
    const val = { ...values, [key]: e.target.value }
    setValues(val)

    const namePattern = /^[^\d]{4,}$/
    const emailPattern = /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if (key === "name") {
      setUserValError({
        ...userValError,
        name: namePattern.test(e.target.value),
      })
    } else if (key === "email") {
      setUserValError({
        ...userValError,
        email: emailPattern.test(e.target.value),
      })
    } else if (key === "password") {
      setUserValError({
        ...userValError,
        password: passwordPattern.test(e.target.value),
      })
    }
  }

  const handleSignUp = () => {
    const id = userData.length ? userData.length + 1 : 1
    const checkEmail = userData.find(
      (data: UserDataTypes) => data.email === values.email
    )

    if (checkEmail?.email) {
      alert("Enter a different user ID. the email is already used.")
      return
    } else {
      if (!userValError.name) {
        alert("Please enter a valid name with at least 4 characters.")
        return
      } else if (!userValError.email) {
        alert("Please enter a valid email.")
        return
      } else if (!userValError.password) {
        alert(
          "Please enter a valid password (at least 8 characters, including at least 1 number and 1 character)."
        )
        return
      } else {
        const val: UserDataTypes = {
          id,
          name: values.name,
          email: values.email,
          password: values.password,
        }
        dispatch(setCurrentUserData(val))
        const newData = userData.length ? [...userData, val] : [val]
        dispatch(setUserData(newData))
        dispatch(setIsUserLogIn(true))
        navigate("/")
      }
    }
  }

  return (
    <div className='h-[100vh] bg-[#e5e4eb] '>
      <div className='flex mx-10 h-24 items-center justify-center sm:justify-between'>
        <img src={logo} height={40} width={125} alt='' />
        <div className='sm:flex hidden items-center'>
          <p className='pr-5 font-semibold'>Already have an Account?</p>
          <button
            onClick={() => navigate("/LogIn")}
            className=' bg-[#7b68ee] hover:bg-[#5f48ea] font-bold text-white rounded-md py-2 px-5'>
            Log In
          </button>
        </div>
      </div>
      <div className='flex mt-10 justify-center '>
        <div className='w-[500px] sm:mx-0 mx-5 px-10 py-5 bg-white rounded-md '>
          <h1 className='my-5 text-center font-bold text-[22px] sm:text-[28px] '>
            Seconds to sign up!
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
                type='text'
                value={values.name}
                onChange={(e) => handleOnChange(e, "name")}
                label='Full Name'
                autoComplete='current-name'
              />
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
          </Box>
          <button
            onClick={() => {
              handleSignUp()
            }}
            className=' w-[100%] bg-[#7b68ee] hover:bg-[#5f48ea] mt-1 font-bold text-white rounded-md py-3 px-5'>
            Sign Up
          </button>
        </div>
      </div>
      <p className='flex sm:hidden justify-center mt-10 '>
        Already have an Account?{" "}
        <Link className='mx-1 underline' to='/'>
          SignUp
        </Link>
      </p>
    </div>
  )
}

export default SignUp
