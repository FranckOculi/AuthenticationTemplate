import { FC } from 'react'

import style from './PublicOnlyLayout.module.scss'

const PublicOnlyLayout: FC<React.PropsWithChildren<unknown>> = ({
	children,
}) => {
	return <div className={style.main}>{children}</div>
}

export default PublicOnlyLayout
