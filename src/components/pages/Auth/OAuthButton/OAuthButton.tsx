import style from './OAuthButton.module.scss'

import { useState } from 'react'

import microsoft from '@/assets/img/microsoft.png'
import google from '@/assets/img/google.png'

import MicrosoftProvider from '../MicrosoftProvider'

const OAuth2Namespace = {
	microsoft,
	google,
}

type nameProps = keyof typeof OAuth2Namespace

type Props = {
	name: nameProps
}

const OAuthButton = ({ name }: Props) => {
	const [initMicrosoftProcess, setMicrosoftProcess] = useState(false)
	const [initGoogleProcess, setGoogleProcess] = useState(false)

	const handleLogin = () => {
		if (name === 'microsoft') setMicrosoftProcess(!initMicrosoftProcess)
	}

	return (
		<div className={`${style.main} ${style[name]} `} onClick={handleLogin}>
			<img src={OAuth2Namespace[name]} className={style.image} />
			<span>Sign in with {name[0].toUpperCase() + name.slice(1)}</span>
			{initMicrosoftProcess && <MicrosoftProvider />}
		</div>
	)
}

export default OAuthButton
