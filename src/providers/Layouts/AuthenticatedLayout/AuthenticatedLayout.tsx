import { FC } from 'react'

import style from './AuthenticatedLayout.module.scss'

const AuthenticatedLayout: FC<React.PropsWithChildren<unknown>> = ({
	children,
}) => {
	return <div className={style.main}>{children}</div>
}

export default AuthenticatedLayout
