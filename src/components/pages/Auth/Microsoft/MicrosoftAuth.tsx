import style from './MicrosoftAuth.module.scss'

import {
	useIsAuthenticated,
	useMsal,
	useMsalAuthentication,
} from '@azure/msal-react'
import { InteractionType } from '@azure/msal-browser'

import { Spinner } from '@/components/ui'
import img from '@/assets/img/microsoft.png'

// type Props = {
// 	toggleDisplayComponent: () => void
// }

const MicrosoftAuth = () =>
	// { toggleDisplayComponent }: Props
	{
		const { instance, inProgress } = useMsal()
		const isAuthenticated = useIsAuthenticated()

		const request = {
			scopes: [
				'User.Read',
				// , 'Mail.Read'
			],
		}

		const { result, error } = useMsalAuthentication(
			InteractionType.Popup,
			request
		)

		const handleLogin = async (e: React.MouseEvent<HTMLDivElement>) => {
			e.preventDefault()

			instance.initialize()

			instance.loginPopup(request).catch((err) => console.log(err))
		}

		// const handleSignout = (e: React.MouseEvent<HTMLDivElement>) => {
		// 	e.preventDefault()

		// 	instance
		// 		.logoutPopup({
		// 			popupWindowAttributes: {
		// 				popupSize: {
		// 					height: 1000,
		// 					width: 650,
		// 				},
		// 			},
		// 		})
		// 		.then(() => toggleDisplayComponent())
		// }

		return (
			<div className={style.main}>
				{!isAuthenticated && (
					<>
						{!inProgress || error ? (
							<div
								className={style.button}
								// onClick={handleSignout}
							>
								<img src={img} />
								Sign out
							</div>
						) : (
							<>
								{!inProgress ||
									(error && (
										<div className={style.button} onClick={handleLogin}>
											<img src={img} />
											Sign in with Microsoft
										</div>
									))}

								{(inProgress === 'login' ||
									inProgress === 'logout' ||
									!error) && (
									<div className={style.spinner_wrapper}>
										<Spinner />
										Connection to Microsoft server
									</div>
								)}
							</>
						)}
					</>
				)}
			</div>
		)
	}

export default MicrosoftAuth
