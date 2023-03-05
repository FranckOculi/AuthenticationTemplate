const baseUrl = import.meta.env.VITE_URL

type Credentials = {
	mail: string
	motDePasse: string
}

export const login = async (credentials: Credentials) => {
	return await fetch(baseUrl + '/auth/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	})
		.then((response) => response.json())
		.catch((err) => {
			throw new Error(err)
		})
}

export const tryToConnect = async (token: string) => {
	console.log(baseUrl)
	return await fetch(baseUrl + '/auth/jwtid', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token,
		},
	})
		.then((response) => response.json())
		.catch((err) => {
			throw new Error(err)
		})
}
