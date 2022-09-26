import { createContext, useReducer } from 'react'
import alertReducer from './AlertReducer'

const initialState = null
const AlertContext = createContext()

const AlertProvider = ({ children }) => {
	const [state, dispatch] = useReducer(alertReducer, initialState)

	const setAlert = (msg, type ) => {
		dispatch({
			type: 'SET_ALERT',
			payload: {
				msg,
				type
			}
		})

		setTimeout(() => {
			dispatch({
				type: 'REMOVE_ALERT'
			})
		}, 3000)
	}

	return (
		<AlertContext.Provider value={{
			alert: state,
			setAlert
		}}>
			{ children }
		</AlertContext.Provider>
	)
}

export {
	AlertContext,
	AlertProvider
}
