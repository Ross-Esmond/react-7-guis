import { useState } from 'react'

export default function Counter ({}) {
    const [count, setCount] = useState(0)

    return (
        <div>
            <span data-testid="display">{ count }</span>
            <button>Count</button>
        </div>
    )
}
