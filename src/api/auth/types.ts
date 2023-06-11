export type AutoConnectSuccess = {
	message: string
	data: {
		user: number
	}
}

export type AutoConnectError = {
	message: string
}

export type SigninSuccess = {
	message: string
	data: {
		accessToken: string
		user: number
	}
}

export type SigninError = {
	message: string
}
