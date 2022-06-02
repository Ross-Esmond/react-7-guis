import { useState, useId } from 'react'

export default function TempConv() {
    const [temp, setTemp] = useState({ type: 'c', value: 0 })
    const id = useId()

    return (
        <div style={{ display: 'flex', background: 'lightgrey', padding: '10px', gap: '10px' }}>
            <div>
                <label htmlFor={`celsius-${id}`}>Celsius</label>&nbsp;
                <input type="number"
                    id={`celsius-${id}`}
                    value={temp.type === 'c' ? temp.value : Math.round((parseFloat(temp.value) - 32) * (5/9))}
                    onChange={(ev) => setTemp({ type: 'c', value: ev.target.value })}
                />
            </div>
            <div>
                <label htmlFor={`fahrenheit-${id}`}>Fahrenheit</label>&nbsp;
                <input type="number"
                    id={`fahrenheit-${id}`}
                    value={temp.type === 'f' ? temp.value : Math.round(temp.value*(9/5) + 32).toString()}
                    onChange={(ev) => setTemp({ type: 'f', value: ev.target.value })}
                />
            </div>
        </div>
    )
}

