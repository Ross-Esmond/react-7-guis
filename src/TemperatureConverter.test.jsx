import React from 'react'
import TemperatureConverter from './TemperatureConverter.jsx'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

test('Temperature Converter to default to 0', async () => {
    const counter = render(<TemperatureConverter />)

    await waitFor(() => screen.getByText('Celsius'))

    expect(screen.getByLabelText('Celsius').value).toBe('0')
})

test('Temperature Converter to update celsius', async () => {
    const counter = render(<TemperatureConverter />)

    fireEvent.change(screen.getByLabelText('Celsius'), { target: { value: '20' } })

    expect(screen.getByLabelText('Celsius').value).toBe('20')
})

test('Temperature Converter to update fahrenheit', async () => {
    const counter = render(<TemperatureConverter />)

    fireEvent.change(screen.getByLabelText('Fahrenheit'), { target: { value: '70' } })

    expect(screen.getByLabelText('Fahrenheit').value).toBe('70')
})

test('Temperature Converter to convert celsius to fahrenheit', async () => {
    const counter = render(<TemperatureConverter />)
    fireEvent.change(screen.getByLabelText('Celsius'), { target: { value: '20' } })
    expect(screen.getByLabelText('Fahrenheit').value).toBe('68')
})

test('Temperature Converter to convert fahrenheit to celsius', async () => {
    const counter = render(<TemperatureConverter />)
    fireEvent.change(screen.getByLabelText('Fahrenheit'), { target: { value: '70' } })
    expect(screen.getByLabelText('Celsius').value).toBe('21')
})

test('Temperature Converter to convert celsius to celsius', async () => {
    const counter = render(<TemperatureConverter />)
    fireEvent.change(screen.getByLabelText('Celsius'), { target: { value: '20.0' } })
    expect(screen.getByLabelText('Celsius').value).toBe('20.0')
})

test('Temperature Converter to convert fahrenheit to fahrenheit', async () => {
    const counter = render(<TemperatureConverter />)
    fireEvent.change(screen.getByLabelText('Fahrenheit'), { target: { value: '70.0' } })
    expect(screen.getByLabelText('Fahrenheit').value).toBe('70.0')
})

