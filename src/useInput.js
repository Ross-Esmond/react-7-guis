import { useRef } from 'react'

function shouldRetainPriorInput({ state, parsed }, high) {
    if (state === 'error') return true
    if (high === parsed) return true
    if (isNaN(parsed) && isNaN(high)) return true
}

export default function useInput(high, onChange, display, parse) {
    const cache = useRef({
        state: 'parsed',
        parsed: high,
        low: display(high)
    })

    function handleChange(low) {
        let parsed = null
        try {
            parsed = parse(low)
            cache.current = {
                state: 'parsed',
                parsed,
                low
            }
        } catch (err) {
            console.error(`The parser for the input you just edited threw an error with input ${low}.`)
            cache.current = {
                state: 'error',
                low
            }
        } finally {
            onChange(parsed)
        }
    }

    if (shouldRetainPriorInput(cache.current, high)) {
        return [cache.current.low, handleChange]
    } else {
        return [display(high), handleChange]
    }
}
