import React, { FC, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Spinner from '@/components/ui/Spinner/Spinner'
import NotFound from '@/pages/NotFound'
import { PublicOnlyLayout } from '@/providers/Layouts'

const Auth = lazy(() => import('@/pages/Auth'))

const PublicRoutes: FC<React.PropsWithChildren<unknown>> = () => {
	return (
		<PublicOnlyLayout>
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route index element={<Auth />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
		</PublicOnlyLayout>
	)
}

export default PublicRoutes
