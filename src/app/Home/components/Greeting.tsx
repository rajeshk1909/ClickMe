import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store/store"

const Greeting = () => {
  const [greeting, setGreeting] = useState<string>("")

  const currentUserData = useSelector(
    (state: RootState) => state.userData.currentUserData
  )

  useEffect(() => {
    updateGreeting()

    const intervalId = setInterval(updateGreeting, 40000)
    return () => clearInterval(intervalId)
  }, [])

  const updateGreeting = () => {
    const currentHour = new Date().getHours()

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good Morning")
    } else if (currentHour >= 12 && currentHour < 16) {
      setGreeting("Good Afternoon")
    } else if (currentHour >= 16 && currentHour < 20) {
      setGreeting("Good Evening")
    } else {
      setGreeting("Good Night")
    }
  }

  return (
    <div>
      <h1 className='font-semibold text-2xl capitalize ml-10 mb-3 mt-5'>
        {greeting}, {currentUserData.name}
      </h1>
    </div>
  )
}

export default Greeting
