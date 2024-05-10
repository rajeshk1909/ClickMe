import { useNavigate } from "react-router-dom"
import { useState } from "react"
import logo from "../../assets/clickup_logo.svg"
import { useSelector } from "react-redux"
import {
  userDataRootState,
  setCurrentUserData,
  setUserData,
} from "../../redux/features/userData"
import { useDispatch } from "react-redux"

const SignUp = () => {
  const userData = useSelector(
    (state: userDataRootState) => state.userData.userData
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [values, setValues] = useState<any>([
    {
      name: "",
      email: "",
      Password: "",
    },
  ])

  const [userValError, setUserValError] = useState<any>({
    name: false,
    email: false,
    password: false,
  })

  const handleOnChange = (e: any, key: any) => {
    let val = { ...values }
    val[key] = e.target.value
    setValues(val)

    // used regex for name and email and password
    const name = /^[^\d]{4,}$/
    const password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const email = /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/

    // form validation
    if (key === "name") {
      const isvalid = name.test(e.target.value)
      setUserValError({ ...userValError, firstName: isvalid })
    } else if (key === "email") {
      const isvalid = email.test(e.target.value)
      setUserValError({ ...userValError, email: isvalid })
    } else if (key === "password") {
      const isvalid = password.test(e.target.value)
      setUserValError({ ...userValError, password: isvalid })
    }
  }

  const createAccount = () => {
    const checkEmail = userData.find(
      (data: any) => data.email === values.email
    )

    if (checkEmail?.email !== undefined) {
      alert("Enter different user id the phone numberor email alread used.")
      return
    } else {
      if (!userValError.firstName) {
        alert("Please enter a valid Firstname name with 4 characters long.")
        return
      } else if (!userValError.email) {
        alert("Please enter a valid Email")
        return
      } else if (!userValError.password) {
        alert(
          "Please enter a valid password (at least 8 characters long, including at least 1 numbers and 1 character)."
        )
        return
      } else {
        const val = {
          id: userData.length ? userData[userData.length - 1].id + 1 : 1,
          name: values.name,
          email: values.email,
          Password: values.password,
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
      <div className='flex mx-10 h-24 items-center justify-between'>
        <img src={logo} height={40} width={125} alt='' />
        <div className='flex items-center'>
          <p className='pr-5 font-semibold'>Already have account account?</p>
          <button
            onClick={() => navigate("/LogIn")}
            className=' bg-[#7b68ee] hover:bg-[#5f48ea] font-bold text-white rounded-md py-2 px-5'>
            Log In
          </button>
        </div>
      </div>
      <div className='flex mt-10 justify-center '>
        <div className='w-[500px] px-10 py-5  bg-white  rounded-md '>
          <h1 className='my-5 text-center font-bold text-[28px] '>
            Seconds to sign up!
          </h1>

          <div className='grid grid-rows-2'>
            <label htmlFor='' className='text-[12px] font-semibold '>
              Full Name
            </label>
            <input
              type='text'
              value={values.name}
              onChange={(e: any) => {
                handleOnChange(e, "name")
              }}
              placeholder='John Doe'
              className='border px-3 rounded-md outline-none py-2'
            />
          </div>

          <div className='grid my-5 grid-rows-2'>
            <label htmlFor='' className='text-[12px] font-semibold '>
              Work Email
            </label>
            <input
              type='text'
              value={values.email}
              onChange={(e: any) => {
                handleOnChange(e, "email")
              }}
              placeholder='example@site.com'
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
              placeholder='Minimum 8 charac'
              className='border px-3 rounded-md outline-none py-2'
            />
          </div>

          <button
            onClick={() => {
              createAccount()
            }}
            className=' w-[100%] bg-[#7b68ee] hover:bg-[#5f48ea] font-bold text-white rounded-md py-3 px-5'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
