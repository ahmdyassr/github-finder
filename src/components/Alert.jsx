import { useContext } from 'react'
import { AlertContext } from '../context/alert/AlertContext'

const Alert = ({ type, msg }) => {
	const { alert } = useContext(AlertContext)

	if (alert !== null) {
		return (
			<div className="alert">
				<h4 className="alert__type">{type}</h4>
				<p className="alert__message">{msg}</p>
			</div>
		)
	} 
}

export default Alert