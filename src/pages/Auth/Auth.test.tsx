import React from 'react'
import Auth from './Auth'
import { describe, test, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { fireEvent, screen } from '@testing-library/dom'

describe('Auth page', () => {
	vi.mock('react', async () => {
		const actual = await vi.importActual('react')
		return {
			...actual,
			useState: () => React.useState({ email: '', password: '' }),
			useContext: () => vi.fn(),
			createContext: () => vi.fn(),
		}
	})

	vi.mock('react-router-dom', async () => {
		return {
			...vi.importActual('react-router-dom'),
			useNavigate: () => vi.fn(),
		}
	})

	vi.mock('react-query', async () => {
		const actual = await vi.importActual('react-query')
		return {
			...actual,
			useQuery: () => vi.fn(),
		}
	})

	test('is should render auth page', () => {
		render(<Auth />)

		const title = screen.getByText('CONNEXION')
		const emailLabel = screen.getByText('Email')
		const passwordlLabel = screen.getByText('Mot de passe')
		const emailInput = document.getElementById('email')
		const passwordInput = document.getElementById('password')
		const submitInput = screen.getByText('Valider')

		expect(title).toBeInTheDocument()
		expect(emailLabel).toBeInTheDocument()
		expect(passwordlLabel).toBeInTheDocument()
		expect(emailInput).toBeInTheDocument()
		expect(passwordInput).toBeInTheDocument()
		expect(submitInput).toBeInTheDocument()
	})

	test('is should submit form', async () => {
		const handleSubmit = vi.fn((e) => e.preventDefault())

		render(<Auth handleSubmit={handleSubmit} />)

		const title = screen.getByText('CONNEXION')
		const emailLabel = screen.getByText('Email')
		const passwordlLabel = screen.getByText('Mot de passe')
		const emailInput = document.getElementById('email')
		const passwordInput = document.getElementById('password')
		const submitInput = screen.getByText('Valider')
		const form = screen.getByRole('form')

		fireEvent.change(emailInput, { target: { value: 'john@doe.com' } })
		fireEvent.change(passwordInput, { target: { value: 'p@$$word' } })

		fireEvent.submit(form)

		expect(title).toBeInTheDocument()
		expect(emailLabel).toBeInTheDocument()
		expect(passwordlLabel).toBeInTheDocument()
		expect(emailInput).toBeInTheDocument()
		expect(passwordInput).toBeInTheDocument()
		expect(submitInput).toBeInTheDocument()
		expect(form).toBeInTheDocument()

		expect(emailInput?.value).toBe('john@doe.com')
		expect(passwordInput?.value).toBe('p@$$word')
		expect(handleSubmit).toHaveBeenCalledTimes(1)
	})
})
