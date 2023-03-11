export type AutoConnectSuccess = {
	message: string
	data: {
		userId: string
	}
}

export type AutoConnectError = {
	message: string
}

export type SigninSuccess = {
	message: string
	data: {
		token: string
		user: number
	}
}

export type SigninError = {
	message: string
}
