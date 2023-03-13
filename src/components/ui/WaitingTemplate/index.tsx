import React from 'react'
import Spinner from '../Spinner/Spinner'

const WaitingTemplate = () => {
	return (
		<div>
			<span>Veuillez patienter, nous chargeons votre espace de travail</span>
			<Spinner />
		</div>
	)
}

export default WaitingTemplate
