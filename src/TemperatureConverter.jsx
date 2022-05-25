import { useState, useId } from 'react'
import useInput from './useInput.js'

export default function TemperatureConverter ({}) {
    const id = useId()
    const [temp, setTemp] = useState(0)
    const [celsius, setCelsius] = useInput(
        temp, t => setTemp(t),
        t => isNaN(t) ? '' : t.toString(),
        c => parseFloat(c)
    )
    const [fahrenheit, setFahrenheit] = useInput(
        temp, t => setTemp(t),
        t => isNaN(t) ? '' : Math.round(t*(9/5) + 32).toString(),
        f => Math.round((parseFloat(f) - 32) * (5/9))
    )

    return (
        <div>
            <input type="text"
                id={`celsius-${id}`}
                value={celsius}
                onChange={(ev) => setCelsius(ev.target.value)}
            />
            <label htmlFor={`celsius-${id}`}>Celsius</label>
            <input type="text"
                id={`fahrenheit-${id}`}
                value={fahrenheit}
                onChange={(ev) => setFahrenheit(ev.target.value)}
            />
            <label htmlFor={`fahrenheit-${id}`}>Fahrenheit</label>
        </div>
    )
}

