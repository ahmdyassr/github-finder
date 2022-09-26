import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const initialState = {
	users: [],
	isLoading: true
}

const GithubContext = createContext()

const GithubProvider = ({ children }) => {
	const [state, dispatch] = useReducer(githubReducer, initialState)

	const fetchUsers = async () => {
		const response = await fetch(`${process.env.GITHUB_URL}/users`, {
			headers: {
				Authorization: `token ${process.env.GITHUB_TOKEN}`
			}			
		})

		const data = await response.json()
		dispatch({
			type: 'GET_USERS',
			payload: data
		})
	}

	return (
		<GithubContext.Provider value={{
			users: state.users,
			isLoading: state.isLoading,
			fetchUsers
		}}>
			{ children }
		</GithubContext.Provider>
	)
}

export {
	GithubContext,
	GithubProvider
}