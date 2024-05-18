import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/clickup_logo.svg"
import { useSelector, useDispatch } from "react-redux"
import {
  setCurrentUserData,
  setUserData,
  UserDataTypes,
} from "../../redux/features/userData"
import { RootState } from "../../redux/store/store"

const SignUp = () => {
  const navigate = useNavigate()

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

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
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
    const checkEmail = userData.find(
      (data: UserDataTypes) => data.email === values.email
    )

    if (checkEmail?.email) {
      alert("Enter a different user ID; the email is already used.")
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
        const idNumber = userData.length ? userData[userData.length - 1].id : 1
        const val: UserDataTypes = {
          id: idNumber,
          name: values.name,
          email: values.email,
          password: values.password,
        }
        dispatch(setCurrentUserData(val))
        const newData = userData.length ? [...userData, val] : [val]
        dispatch(setUserData(newData))
        navigate("/Home")
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

          <form>
            <div className='grid grid-rows-2'>
              <label htmlFor='name' className='text-[12px] font-semibold '>
                Full Name
              </label>
              <input
                type='text'
                value={values.name}
                onChange={(e) => handleOnChange(e, "name")}
                placeholder='John Doe'
                className='border px-3 rounded-md outline-none py-2'
                autoComplete='current-name'
              />
            </div>

            <div className='grid my-5 grid-rows-2'>
              <label htmlFor='email' className='text-[12px] font-semibold '>
                Work Email
              </label>
              <input
                type='text'
                value={values.email}
                onChange={(e) => handleOnChange(e, "email")}
                placeholder='example@site.com'
                className='border px-3 rounded-md outline-none py-2'
                autoComplete='current-email'
              />
            </div>

            <div className='grid my-5 grid-rows-2'>
              <label htmlFor='password' className='text-[12px] font-semibold '>
                Password
              </label>
              <input
                type='password'
                value={values.password}
                onChange={(e) => handleOnChange(e, "password")}
                placeholder='Minimum 8 characters'
                className='border px-3 rounded-md outline-none py-2'
                autoComplete='current-password'
              />
            </div>
          </form>
          <button
            onClick={() => {
              handleSignUp()
            }}
            className=' w-[100%] bg-[#7b68ee] hover:bg-[#5f48ea] font-bold text-white rounded-md py-3 px-5'>
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
