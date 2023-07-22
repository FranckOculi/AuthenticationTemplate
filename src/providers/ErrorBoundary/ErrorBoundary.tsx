import React, { ErrorInfo } from 'react'
import { addLog } from '@/api/logError/logError'

type ErrorState = {
	error: Error
	errorInfo: ErrorInfo
}

class ErrorBoundary extends React.Component<React.PropsWithChildren<unknown>> {
	state: ErrorState = {
		error,
		errorInfo,
	}
	constructor(props) {
		super(props)
		this.state = { error: null, errorInfo: null }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		this.setState({
			error: error,
			errorInfo: errorInfo,
		})
		addLog(error, errorInfo)
	}
	render() {
		if (this.state.errorInfo) {
			return <h1>Oups !</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary
