import { useState } from 'react'
import equal from 'fast-deep-equal'

export function useLens(display, parse) {
    const [low, setLow] = useState()
    const [parsed, setParsed] = useState({})

    return [
        high => equal(high, parsed) ? low : display(high),
        low => {
            setLow(low)
            let parsed = parse(low)
            setParsed(parsed)
            return parsed
        }
    ]
}

function shouldRetainPriorInput(error, parsed, high) {
    if (error) return true
    if (high === parsed) return true
    if (typeof parsed === 'number' && typeof high === 'number' && isNaN(parsed) && isNaN(high)) return true
}

export default function useInput(high, onChange, display, parse) {
    const [low, setLow] = useState(display(high))
    const [parsed, setParsed] = useState(high)
    const [error, setError] = useState(false)

    function handleChange(low) {
        setLow(low)
        let parsed = null
        try {
            parsed = parse(low)
            setParsed(parsed)
            setError(false)
        } catch (err) {
            console.error(`The parser for the input you just edited threw an error with input ${low}.`)
            setError(true)
        } finally {
            onChange(parsed)
        }
    }

    if (shouldRetainPriorInput(error, parsed, high)) {
        return [low, handleChange]
    } else {
        return [display(high), handleChange]
    }
}
