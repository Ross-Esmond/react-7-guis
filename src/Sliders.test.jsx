import React from 'react'
import Sliders from './Sliders.jsx'
import {render, fireEvent, waitFor, screen, act} from '@testing-library/react'
import '@testing-library/jest-dom'

test('Changes Primary slider on limit change', async () => {
    const slider = render(<Sliders />)

    await waitFor(() => screen.getByLabelText('High'))

    fireEvent.change(screen.getByLabelText('High'), { target: { value: '4' } })

    expect(screen.getByLabelText('Low').value).toBe('4')
})

