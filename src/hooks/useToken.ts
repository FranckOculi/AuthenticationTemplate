const tokenKey = import.meta.env.VITE_TOKEN_KEY

export const getToken = () => {
	return localStorage.getItem(tokenKey)
}

export const setToken = (value: string) => {
	const newValue = 'Bearer ' + value
	localStorage.setItem(tokenKey, newValue)
}

export const removeTokens = () => {
	localStorage.clear()
}
