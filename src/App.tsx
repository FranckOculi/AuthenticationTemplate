import {lazy} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Providers } from '@/providers'
import { Layout } from '@/providers/Layouts'
import {
	AuthenticatedRouteGuard,
	PublicOnlyRouteGuard,
	RoutesGuard,
} from '@/providers/router/guards'
import {
	AuthenticatedRoutes,
	PublicOnlyRoutes,
} from '@/providers/router/routes'

const NotFound = lazy(() => import('@/pages/NotFound'))

import '@/scss/index.scss'

function App() {
	return (
		<BrowserRouter>
			<Providers>
				<Layout>
					<Routes>
						<Route element={<RoutesGuard />}>
							<Route
								path='/*'
								element={
									<AuthenticatedRouteGuard>
										<AuthenticatedRoutes />
									</AuthenticatedRouteGuard>
								}
							/>
							<Route
								path='/connexion/*'
								element={
									<PublicOnlyRouteGuard>
										<PublicOnlyRoutes />
									</PublicOnlyRouteGuard>
								}
							/>
							<Route path='*' element={<NotFound />} />
						</Route>
					</Routes>
				</Layout>
			</Providers>
		</BrowserRouter>
	)
}

export default App
