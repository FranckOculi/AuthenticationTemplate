import style from './OAuthButton.module.scss'

import microsoft from '../../../../assets/img/microsoft.png'
import google from '../../../../assets/img/google.png'

const OAuth2Namespace = {
	microsoft: microsoft,
	google: google,
}

type nameProps = keyof typeof OAuth2Namespace

type Props = {
	name: nameProps
}

const OAuthButton = ({ name }: Props) => {
	return (
		<div className={`${style.main} ${style[name]} `}>
			<img src={OAuth2Namespace[name]} className={style.image} />
			<span>Sign in with {name[0].toUpperCase() + name.slice(1)}</span>
		</div>
	)
}

export default OAuthButton
