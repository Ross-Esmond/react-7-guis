import { useState, useId } from 'react'
import { useLens } from './useInput.js'

export default function TemperatureConverter ({}) {
    const id = useId()
    const [temp, setTemp] = useState(0)
    const [getCelsius, setCelsius] = useLens(
        t => isNaN(t) ? '' : t.toString(),
        c => parseFloat(c)
    )
    const [getFahrenheit, setFahrenheit] = useLens(
        t => isNaN(t) ? '' : Math.round(t*(9/5) + 32).toString(),
        f => Math.round((parseFloat(f) - 32) * (5/9))
    )

    return (
        <div style={{ display: 'flex', background: 'lightgrey', padding: '10px', gap: '10px' }}>
            <div>
                <label htmlFor={`celsius-${id}`}>Celsius</label>&nbsp;
                <input type="number"
                    id={`celsius-${id}`}
                    value={getCelsius(temp)}
                    onChange={(ev) => setTemp(setCelsius(ev.target.value))}
                />
            </div>
            <div>
                <label htmlFor={`fahrenheit-${id}`}>Fahrenheit</label>&nbsp;
                <input type="number"
                    id={`fahrenheit-${id}`}
                    value={getFahrenheit(temp)}
                    onChange={(ev) => setTemp(setFahrenheit(ev.target.value))}
                />
            </div>
        </div>
    )
}

