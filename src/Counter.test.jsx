import React from 'react'
import Counter from './Counter.jsx'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

test('Counter starts by displaying 0', async () => {
    const counter = render(<Counter />)

    await waitFor(() => screen.getByText('Count'))

    expect(screen.getByTestId('display')).toHaveTextContent('0')
})

test('Counter counts up from 0', async () => {
    const counter = render(<Counter />)

    fireEvent.click(screen.getByText('Count'))

    expect(screen.getByTestId('display')).toHaveTextContent('1')
})
