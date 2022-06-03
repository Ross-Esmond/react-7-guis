import { useState, useId } from 'react'

export function Slider({ label, onChange, value, ...props }) {
    const id = useId()

    return (
        <div style={{ display: 'flex', maxWidth: '300px' }}>
            <label htmlFor={id} style={{ flexGrow: '1' }}>{label}</label>
            <input type="range" id={id} onChange={e => onChange(parseInt(e.target.value))} value={value.toString()} {...props} />
        </div>
    )
}

export default function SlidersStandard() {
    const [high, setHigh] = useState(7)
    const [low, setLow] = useState(3)
    const [last, setLast] = useState('high')

    function handleHigh(high) {
        setHigh(high)
        setLast('high')
    }

    function handleLow(low) {
        setLow(low)
        setLast('low')
    }

    const highRender = last === 'high' ? high : Math.max(high, low)
    const lowRender = last === 'low' ? low : Math.min(high, low)

    return (
        <div style={{ display: "grid" }}>
            <Slider label="High" min="0" max="10" value={highRender} onChange={handleHigh} />
            <Slider label="Low" min="0" max="10" value={lowRender} onChange={handleLow} />
        </div>
    )
}

