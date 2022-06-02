import { useState, useId } from 'react'
import useInput from './useInput.js'

export function Slider({ label, onChange, value, ...props }) {
    const id = useId()
    const [str, setStr] = useInput(
        value, onChange,
        num => num.toString(),
        str => parseInt(str)
    )

    return (
        <div style={{ display: 'flex', maxWidth: '300px' }}>
            <label htmlFor={id} style={{ flexGrow: '1' }}>{label}</label>
            <input type="range" id={id} onChange={ev => setStr(ev.target.value)} value={str} {...props} />
        </div>
    )
}

export default function Sliders() {
    const [volumns, setVolumns] = useState({ m: 10, p: 5 })
    const [master, setMaster] = useInput(volumns, setVolumns, vol => vol.m, val => ({ ...volumns, m: val }))
    const [primary, setPrimary] = useInput(volumns, setVolumns, vol => Math.min(vol.m, vol.p), val => ({ ...volumns, p: val }))

    return (
        <div style={{ display: "grid" }}>
            <Slider label="High" min="0" max="10" value={master} onChange={setMaster} />
            <Slider label="Low" min="0" max="10" value={primary} onChange={setPrimary} />
        </div>
    )
}

