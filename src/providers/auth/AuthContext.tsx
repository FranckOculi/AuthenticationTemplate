import { createContext, FC, useContext, useState } from 'react'

type AuthContextValue = {
	isAuthenticated: boolean
	setIsAuthenticated: (value: boolean) => void
}

const AuthContext = createContext<AuthContextValue>(null as TODO)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider: FC<React.PropsWithChildren<unknown>> = ({
	children,
}) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: isAuthenticated,
				setIsAuthenticated: setIsAuthenticated,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
