import React, { FC, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Spinner from '@/components/ui/Spinner/Spinner'
import NotFound from '@/pages/NotFound'
import { AuthenticatedLayout } from '@/providers/Layouts'

const Home = lazy(() => import('@/pages/Home'))
const Profile = lazy(() => import('@/pages/Profile'))

const AuthenticatedRoutes: FC<React.PropsWithChildren<unknown>> = () => {
	return (
		<AuthenticatedLayout>
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route index element={<Home />} />
					<Route path='profil' element={<Profile />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
		</AuthenticatedLayout>
	)
}

export default AuthenticatedRoutes
