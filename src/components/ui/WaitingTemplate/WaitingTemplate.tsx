import { Spinner } from '../'

const WaitingTemplate = () => {
	return (
		<div>
			<span>Veuillez patienter, nous chargeons votre espace de travail</span>
			<Spinner />
		</div>
	)
}

export default WaitingTemplate
