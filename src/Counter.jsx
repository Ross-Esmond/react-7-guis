import { useState } from 'react'

export default function Counter ({}) {
    const [count, setCount] = useState(0)

    return (
        <div style={{ background: 'lightgrey', padding: '10px' }}>
            <span data-testid="display">{ count }</span>&nbsp;
            <button onClick={() => setCount(c => c + 1)}>Count</button>
        </div>
    )
}
