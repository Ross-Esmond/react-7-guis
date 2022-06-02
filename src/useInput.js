import { useRef, useState } from 'react'

function shouldRetainPriorInput({ state, parsed }, high) {
    if (state === 'error') return true
    if (high === parsed) return true
    if (typeof parsed === 'number' && typeof high === 'number' && isNaN(parsed) && isNaN(high)) return true
}

export default function useInput(high, onChange, display, parse) {
    const cache = useRef({
        state: 'parsed',
        parsed: high
    })
    const [low, setLow] = useState(display(high))

    function handleChange(low) {
        setLow(low)
        let parsed = null
        try {
            parsed = parse(low)
            cache.current = {
                state: 'parsed',
                parsed
            }
        } catch (err) {
            console.error(`The parser for the input you just edited threw an error with input ${low}.`)
            cache.current = {
                state: 'error'
            }
        } finally {
            onChange(parsed)
        }
    }

    if (shouldRetainPriorInput(cache.current, high)) {
        return [low, handleChange]
    } else {
        return [display(high), handleChange]
    }
}
