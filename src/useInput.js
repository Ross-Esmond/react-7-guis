import { useRef } from 'react'

export default function useInput(high, onChange, display, parse) {
    const cache = useRef(null)

    function handleChange(low) {
        const parsed = parse(low)
        cache.current = {
            parsed,
            low
        }
        onChange(parsed)
    }

    if (cache.current != null && high === cache.current.parsed) {
        return [cache.current.low, handleChange]
    } else {
        return [display(high), handleChange]
    }
}
