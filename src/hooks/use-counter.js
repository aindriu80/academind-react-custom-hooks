import { useState, useEffect } from 'react'

// hooks-> need to start with 'use' in function name
const useCounter = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return counter
}

export default useCounter
