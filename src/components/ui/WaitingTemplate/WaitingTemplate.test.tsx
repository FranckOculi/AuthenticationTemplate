import React from 'react'
import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import WaitingTemplate from './index'

describe('WaitingTemplate', () => {
	test('it should render successfully', () => {
		const { baseElement } = render(<WaitingTemplate />)

		expect(baseElement).toBeInTheDocument()
	})

	test('it should render with all children components', () => {
		render(<WaitingTemplate />)

		const span = screen.getByText(
			'Veuillez patienter, nous chargons votre espace de travail'
		)
		const spinner = document.getElementById('spinner')

		expect(span).toBeInTheDocument()
		expect(spinner).toBeInTheDocument()
	})
})
