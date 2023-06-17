import { FC } from 'react'
import style from './Divider.module.scss'

const Divider: FC = () => {
	return (
		<div className={style.main}>
			<span className={style.border} />
			<span>OR</span>
			<span className={style.border} />
		</div>
	)
}

export default Divider
