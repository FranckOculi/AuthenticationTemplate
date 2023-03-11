import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { login, tryToConnect } from '@/api/auth/auth'
import { removeTokens, setToken } from './useToken'
import { useAuthContext } from '@/providers/auth/AuthContext'

import {
	AutoConnectError,
	AutoConnectSuccess,
	SigninError,
	SigninSuccess,
} from '@/api/auth/types'

const useAuth = () => {
	const navigate = useNavigate()
	const { setIsAuthenticated } = useAuthContext()

	const signIn = (email: string, password: string) => {
		const credentials = {
			mail: email,
			motDePasse: password,
		}

		return useQuery<unknown, SigninError, SigninSuccess, string[]>(
			['signin', email, password],
			() => login(credentials),
			{
				enabled: false,
				refetchOnWindowFocus: false,
				onSuccess: async (data) => {
					if (data.data?.token) {
						setToken(data.data?.token)
						setIsAuthenticated(true)
						navigate('/', { replace: true })
					}
				},
				onError: (err) => {},
			}
		)
	}

	type AutoConnectProps = {
		token: string
	}
	const autoConnect = (onSuccessToConnect: () => void) => {
		return useMutation<AutoConnectSuccess, AutoConnectError, AutoConnectProps>(
			({ token }) => {
				return tryToConnect(token)
			},
			{
				onSuccess: (data) => {
					if (data.data.userId) {
						setIsAuthenticated(true)
					}
					onSuccessToConnect()
				},
				onError: (err) => {},
			}
		)
	}

	const logout = () => {
		setIsAuthenticated(false)
		removeTokens()
		navigate('/', { replace: true })
	}

	return { signIn, autoConnect, logout }
}

export default useAuth
