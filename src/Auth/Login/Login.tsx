import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/clickup_logo.svg"
import { useSelector } from "react-redux"
import {
  userDataRootState,
  setCurrentUserData,
} from "../../redux/features/userData"
import { useDispatch } from "react-redux"

const Login = () => {

  const navigate = useNavigate()

  const userData = useSelector(
    (state: userDataRootState) => state.userData.userData
  )
  
  const dispatch = useDispatch()

  const [values, setValues] = useState<any>([
    {
      email: "",
      Password: "",
    },
  ])

  const [userValError, setUserValError] = useState<any>({
    email: false,
    password: false,
  })

  const handleOnChange = (e: any, key: any) => {
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
    const currentUser: any = userData.find(
      (user: any) => user.email === values.email
    )

    if (currentUser && currentUser.email === values.email) {
      if (userValError.password && currentUser.password === values.Password) {
        dispatch(setCurrentUserData(currentUser))
        navigate("/Home")
      } else {
        alert("Enter correct password.")
      }
    } else {
      alert("User not fount.")
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
          <form>
            <div className='grid grid-rows-2'>
              <label htmlFor='' className='text-[12px] font-semibold '>
                Work Email
              </label>
              <input
                type='text'
                value={values.email}
                onChange={(e: any) => {
                  handleOnChange(e, "email")
                }}
                placeholder='Enter your work email'
                className='border px-3 rounded-md outline-none py-2'
              />
            </div>

            <div className='grid my-5 grid-rows-2'>
              <label htmlFor='' className='text-[12px] font-semibold '>
                password
              </label>
              <input
                type='password'
                value={values.password}
                onChange={(e: any) => {
                  handleOnChange(e, "password")
                }}
                placeholder='Enter password'
                className='border px-3 rounded-md outline-none py-2'
              />
            </div>

            <button
              onClick={() => {
                handleLogin()
              }}
              className=' w-[100%] bg-[#7b68ee] hover:bg-[#5f48ea] font-bold text-white rounded-md py-3 px-5'>
              Log In
            </button>
          </form>
        </div>
      </div>
      <p className='flex sm:hidden justify-center mt-10 '>
        Don't have account?{" "}
        <Link className='mx-1 underline' to='/SignUp'>
          SignUp
        </Link>
      </p>
    </div>
  )
}

export default Login
