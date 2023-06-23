import style from './MicrosoftProvider.module.scss'

import { MsalProvider } from '@azure/msal-react'
import {
	AuthenticationResult,
	Configuration,
	EventMessage,
	EventType,
	PublicClientApplication,
} from '@azure/msal-browser'

const MicrosoftProvider = () => {
	const clientId = import.meta.env.VITE_AZURE_CLIENT_ID
	const tenantId = import.meta.env.VITE_AZURE_TENANT_ID
	const redirectUri = import.meta.env.VITE_OAUTH_REDIRECT_URI

	const msalConfig: Configuration = {
		auth: {
			clientId,
			authority: 'https://login.microsoftonline.com/' + tenantId,
			redirectUri,
		},
		cache: {
			cacheLocation: 'localStorage',
			storeAuthStateInCookie: false,
		},
	}

	const msalInstance = new PublicClientApplication(msalConfig)

	msalInstance.addEventCallback((event: EventMessage) => {
		if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
			const payload = event.payload as AuthenticationResult
			const account = payload.account
			msalInstance.setActiveAccount(account)
		}
	})

	return (
		<MsalProvider instance={msalInstance}>
			<MicrosoftWrapper />
		</MsalProvider>
	)
}

export default MicrosoftProvider
