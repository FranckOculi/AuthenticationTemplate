import React, { FC } from 'react'

import style from './Input.module.scss'

type Props = {
	label: string
	type: string
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<React.PropsWithChildren<Props>> = ({
	label,
	type,
	handleChange,
}) => {
	if (type === 'submit')
		return <input className={style.submit} type='submit' value={label} />

	return (
		<div className={style.input_wrapper}>
			<label className={style.label} htmlFor={type}>
				{label}
			</label>
			<input
				className={style.input}
				type={type}
				id={type}
				onChange={handleChange}
			/>
		</div>
	)
}

export default Input
