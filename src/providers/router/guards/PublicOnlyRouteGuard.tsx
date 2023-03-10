import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuthContext } from '@/providers/auth/AuthContext'

export const PublicOnlyRouteGuard: FC<React.PropsWithChildren<unknown>> = ({
	children,
}) => {
	const { isAuthenticated } = useAuthContext()

	return isAuthenticated ? <Navigate to='/' replace /> : <div>{children}</div>
}
