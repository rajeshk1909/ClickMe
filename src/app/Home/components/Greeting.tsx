import { useState, useEffect } from "react"

type GreetingProps = {
  curruntUserData: any
}

const Greeting = ({ curruntUserData }: GreetingProps) => {
  const [greeting, setGreeting] = useState<string>("")

  useEffect(() => {
    updateGreeting()

    const intervalId = setInterval(updateGreeting, 40000) // Update every minute
    return () => clearInterval(intervalId) // Clean up interval on component unmount
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
        {greeting}, {curruntUserData.name}
      </h1>
    </div>
  )
}

export default Greeting
