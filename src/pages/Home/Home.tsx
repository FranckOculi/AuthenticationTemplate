import { FC } from 'react'
import { Link } from 'react-router-dom'

import style from './Home.module.scss'

const Home: FC = () => {
	return (
		<div className={style.main}>
			<div>Accueil</div>
			<Link to='/profil'>Mon profil</Link>
		</div>
	)
}

export default Home
