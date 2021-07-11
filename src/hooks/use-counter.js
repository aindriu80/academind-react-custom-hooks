import { useState, useEffect } from 'react'

// hooks-> need to start with 'use' in function name
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1)
      } else {
        setCounter((prevCounter) => prevCounter - 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [forwards])

  return counter
}

export default useCounter
