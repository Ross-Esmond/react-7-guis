import { useState, useId } from 'react'
import useInput from './useInput.js'

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
    const [volumns, setVolumns] = useState({ m: 7, p: 3 })
    const [high, setHigh] = useInput(volumns, setVolumns, vol => Math.max(vol.m, vol.p), val => ({ ...volumns, m: val }))
    const [low, setLow] = useInput(volumns, setVolumns, vol => Math.min(vol.m, vol.p), val => ({ ...volumns, p: val }))

    return (
        <div style={{ display: "grid" }}>
            <Slider label="High" min="0" max="10" value={high} onChange={setHigh} />
            <Slider label="Low" min="0" max="10" value={low} onChange={setLow} />
        </div>
    )
}

