import { MicrosoftProvider } from '../Microsoft'

type Props = {
	children: React.ReactNode
}

const OAuthProvider = ({ children }: Props) => {
	//!TODO Ajouter GoogleProvider
	return <MicrosoftProvider>{children}</MicrosoftProvider>
}

export default OAuthProvider
