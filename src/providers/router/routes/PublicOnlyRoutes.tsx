import React, { FC, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import NotFound from '@/pages/NotFound'
import { PublicOnlyLayout } from '@/providers/Layouts'

import { Spinner } from '@/components/ui'

const Auth = lazy(() => import('@/pages/Auth'))

const PublicOnlyRoutes: FC<React.PropsWithChildren<unknown>> = () => {
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

export default PublicOnlyRoutes
