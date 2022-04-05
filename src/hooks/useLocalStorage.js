import { useState } from 'react'

export default function useLocalStorage(key, defaultValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = localStorage.getItem(key)
            return value ? JSON.parse(value) : defaultValue
        } catch (err) {
            console.error(err)
            return err
        }
    })

    // Store value to store
    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (err) {
            console.error(err)
        }
    }

    return [storedValue, setValue]
}
