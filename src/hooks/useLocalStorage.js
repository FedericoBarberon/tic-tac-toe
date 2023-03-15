import { useEffect, useState } from 'react'

const PREFIX = 'tictactoe-'

export const useLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + key

  const [value, setValue] = useState(() => {
    const jsonValue = window.localStorage.getItem(prefixedKey + key)

    if (jsonValue !== null) return JSON.parse(jsonValue)
    if (typeof initialValue === 'function') return initialValue()
    return initialValue
  })

  useEffect(() => {
    if (value !== undefined || value !== null) {
      window.localStorage.setItem(prefixedKey, JSON.stringify(value))
    }
  }, [value])

  return [value, setValue]
}
