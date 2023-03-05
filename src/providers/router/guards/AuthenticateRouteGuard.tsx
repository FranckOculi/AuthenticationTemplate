import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthContext } from '@/providers/auth/AuthContext'

export const AuthenticateRouteGuard: FC<React.PropsWithChildren<unknown>> = ({
	children,
}) => {
	const { isAuthenticated } = useAuthContext()
	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuthenticated) {
			navigate('/connexion')
		}
	}, [isAuthenticated])

	return !isAuthenticated ? null : <div>{children}</div>
}
