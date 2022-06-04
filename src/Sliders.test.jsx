import React from 'react'
import Sliders from './Sliders.jsx'
import {render, fireEvent, waitFor, screen, act} from '@testing-library/react'
import '@testing-library/jest-dom'

test('Changes low slider on low', async () => {
    const slider = render(<Sliders />)

    await waitFor(() => screen.getByLabelText('Max'))

    expect(screen.getByLabelText('Min').value).toBe('3')
    fireEvent.change(screen.getByLabelText('Min'), { target: { value: '8' } })
    expect(screen.getByLabelText('Min').value).toBe('8')
})

test('Changes low slider on high', async () => {
    const slider = render(<Sliders />)

    await waitFor(() => screen.getByLabelText('Max'))

    expect(screen.getByLabelText('Min').value).toBe('3')
    fireEvent.change(screen.getByLabelText('Max'), { target: { value: '2' } })
    expect(screen.getByLabelText('Min').value).toBe('2')
})

test('Changes high slider on low', async () => {
    const slider = render(<Sliders />)

    await waitFor(() => screen.getByLabelText('Max'))

    expect(screen.getByLabelText('Max').value).toBe('7')
    fireEvent.change(screen.getByLabelText('Min'), { target: { value: '8' } })
    expect(screen.getByLabelText('Max').value).toBe('8')
})

test('Reverts high slider when reverting low', async () => {
    const slider = render(<Sliders />)

    await waitFor(() => screen.getByLabelText('Max'))

    expect(screen.getByLabelText('Max').value).toBe('7')
    fireEvent.change(screen.getByLabelText('Min'), { target: { value: '8' } })
    expect(screen.getByLabelText('Max').value).toBe('8')
    fireEvent.change(screen.getByLabelText('Min'), { target: { value: '3' } })
    expect(screen.getByLabelText('Max').value).toBe('7')
})

test('does not revert high slider if last changed', async () => {
    const slider = render(<Sliders />)

    await waitFor(() => screen.getByLabelText('Max'))

    expect(screen.getByLabelText('Max').value).toBe('7')
    fireEvent.change(screen.getByLabelText('Min'), { target: { value: '8' } })
    expect(screen.getByLabelText('Max').value).toBe('8')
    fireEvent.change(screen.getByLabelText('Max'), { target: { value: '9' } })
    expect(screen.getByLabelText('Max').value).toBe('9')
    fireEvent.change(screen.getByLabelText('Min'), { target: { value: '3' } })
    expect(screen.getByLabelText('Max').value).toBe('9')
})

