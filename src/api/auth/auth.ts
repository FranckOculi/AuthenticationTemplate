const baseUrl = import.meta.env.VITE_URL

type Credentials = {
	email: string
	password: string
}

export const login = async (credentials: Credentials) => {
	return await fetch(baseUrl + '/auth/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
		credentials: 'include',
	})
		.then((response) => {
			if (response.ok) return response.json()
			throw new Error()
		})
		.catch((err) => {
			throw new Error(err)
		})
}

export const tryToConnect = async (token: string) => {
	return await fetch(baseUrl + '/auth/refresh', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
	})
		.then((response) => {
			if (response.ok) return response.json()
			throw new Error()
		})
		.catch((err) => {
			throw new Error(err)
		})
}
