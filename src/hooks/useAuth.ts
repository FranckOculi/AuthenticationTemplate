import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { login, tryToConnect } from '@/api/auth/auth'
import { setToken } from './useToken'
import { useAuthContext } from '@/providers/auth/AuthContext'

type SigninSuccess = {
	message: string
	data: {
		token: string
		user: number
	}
}
const useAuth = () => {
	const navigate = useNavigate()
	const { setIsAuthenticated } = useAuthContext()

	const signIn = (email: string, password: string) => {
		const credentials = {
			mail: email,
			motDePasse: password,
		}

		return useQuery<SigninSuccess>(
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
			}
		)
	}

	type Mutation = {
		token: string
	}
	const autoConnect = (onSuccessToConnect: () => void) => {
		return useMutation(
			({ token }: Mutation) => {
				return tryToConnect(token)
			},
			{
				onSuccess: (data) => {
					if (data.data.userId) {
						setIsAuthenticated(true)
					}
					onSuccessToConnect()
				},
			}
		)
	}

	return { signIn, autoConnect }
}

export default useAuth
