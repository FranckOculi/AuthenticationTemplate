import { useState, SyntheticEvent } from 'react'

import useAuth from '@/hooks/useAuth'

import { Divider, Input } from '@/components/ui'
import { OAuthButton } from '@/components/pages/Auth'

import style from './Auth.module.scss'

const Auth = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})
	const { signIn } = useAuth()
	const { refetch, isError } = signIn(formData.email, formData.password)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.id]: e.target.value })
	}

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()
		refetch()
	}

	return (
		<div className={style.main}>
			<form
				className={style.form}
				role='form'
				action='login'
				onSubmit={handleSubmit}
			>
				<span className={style.title}>CONNEXION</span>

				<Input label='Email' type='email' handleChange={handleChange} />
				<Input
					label='Mot de passe'
					type='password'
					handleChange={handleChange}
				/>
				<Input label='Valider' type='submit' />

				<Divider />

				<OAuthButton name='microsoft' />
				<OAuthButton name='google' />
			</form>
		</div>
	)
}

export default Auth
