import React from 'react'
import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Spinner from './Spinner'

describe('Spinner', () => {
	test('it should render successfully', () => {
		const { baseElement } = render(<Spinner />)

		expect(baseElement).toBeInTheDocument()
	})
})
