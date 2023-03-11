import React from 'react'
import Spinner from '../Spinner/Spinner'

const WaitingTemplate = () => {
	return (
		<div>
			<span>Veuillez patienter, nous chargons votre espace de travail</span>
			<Spinner />
		</div>
	)
}

export default WaitingTemplate
