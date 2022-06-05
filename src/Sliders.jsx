import { useState, useId } from 'react'
import useAdapter from 'useadapter'

export function Slider({ label, onChange, value, ...props }) {
    const id = useId()

    return (
        <div style={{ display: 'flex', maxWidth: '300px' }}>
            <label htmlFor={id} style={{ flexGrow: '1' }}>{label}</label>
            <input type="range" id={id} onChange={e => onChange(parseInt(e.target.value))} value={value.toString()} {...props} />
        </div>
    )
}

export default function Sliders() {
    const [{ min, max }, setVolumns] = useState({ max: 7, min: 3 })
    const [getMin, setMin] = useAdapter(({ max, min }) => Math.min(max, min), min => ({ max, min }))
    const [getMax, setMax] = useAdapter(({ max, min }) => Math.max(max, min), max => ({ max, min }))

    return (
        <div style={{ display: "grid" }}>
            <Slider label="Max" min="0" max="10" value={getMax({ min, max })} onChange={max => setVolumns(setMax(max))} />
            <Slider label="Min" min="0" max="10" value={getMin({ min, max })} onChange={min => setVolumns(setMin(min))} />
        </div>
    )
}

