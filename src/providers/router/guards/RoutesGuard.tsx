import React, { FC, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import useAuth from '@/hooks/useAuth'
import { getToken } from '@/hooks/useToken'

export const RoutesGuard: FC<React.PropsWithChildren<unknown>> = () => {
	const [isTokenVerified, toggleTokenVerified] = useState(false)
	const randomToken = getToken()

	const { autoConnect } = useAuth()
	const { mutate } = autoConnect(onSuccessToConnect)

	function onSuccessToConnect() {
		toggleTokenVerified(true)
	}

	useEffect(() => {
		if (!randomToken) {
			toggleTokenVerified(true)
		} else {
			mutate({ token: randomToken })
		}
	}, [randomToken])

	return !isTokenVerified ? null : <Outlet />
}
