import React from 'react'
import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
	test('it should render successfully', () => {
		const { baseElement } = render(<Input />)

		expect(baseElement).toBeInTheDocument()
	})

	describe('Props', () => {
		test('it should render label', () => {
			render(<Input label='hello' />)
			const text = screen.getByText('hello')

			expect(text).toBeTruthy()
		})

		test('it should render type', () => {
			render(<Input type='hello' />)
			const input = document.getElementById('hello')
			const type = input?.getAttribute('type')

			expect(type).toBe('hello')
		})
	})

	describe('Action', () => {
		test('it should render the new value when we change the input value', () => {
			render(<Input type='hello' />)
			const input = document.getElementById('hello')
			fireEvent.change(input, { target: { value: 'world' } })

			expect(input?.value).toBe('world')
		})

		test('it should trigger the action when we change the input value', () => {
			const handleChange = vi.fn()

			render(<Input type='hello' handleChange={handleChange} />)
			const input = document.getElementById('hello')
			fireEvent.change(input, { target: { value: 'world' } })

			expect(handleChange.mock.calls[0][0].target.value).toBe('world')
		})
	})
})
