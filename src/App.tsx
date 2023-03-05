import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Providers } from '@/providers'
import { Layout } from '@/providers/Layouts'
import {
	AuthenticateRouteGuard,
	PublicOnlyRouteGuard,
	RoutesGuard,
} from '@/providers/router/guards'
import { AuthenticatedRoutes, PublicRoutes } from '@/providers/router/routes'

import NotFound from '@/pages/NotFound'

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
									<AuthenticateRouteGuard>
										<AuthenticatedRoutes />
									</AuthenticateRouteGuard>
								}
							/>
							<Route
								path='/connexion/*'
								element={
									<PublicOnlyRouteGuard>
										<PublicRoutes />
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
