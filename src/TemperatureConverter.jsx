import { useState } from 'react'

let lastId = 0
export default function TemperatureConverter ({}) {
    const id = useState(lastId++)
    const [temp, setTemp] = useState({ value: '0', type: 'c' })

    return (
        <div>
            <input type="text"
                id={`celsius-${id}`}
                value={temp.type === 'c' ? temp.value : Math.round((parseInt(temp.value)-32)*(5/9))}
                onChange={(ev) => setTemp({ value: ev.target.value, type: 'c' })}
            />
            <label htmlFor={`celsius-${id}`}>Celsius</label>
            <input type="text"
                id={`fahrenheit-${id}`}
                value={temp.type === 'f' ? temp.value : Math.round(parseInt(temp.value)*(9/5) + 32)}
                onChange={(ev) => setTemp({ value: ev.target.value, type: 'f' })}
            />
            <label htmlFor={`fahrenheit-${id}`}>Fahrenheit</label>
        </div>
    )
}

