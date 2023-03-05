import { FC } from 'react'

import style from './Layout.module.scss'

const Layout: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
	return <div className={style.main}>{children}</div>
}

export default Layout
