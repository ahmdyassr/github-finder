import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const initialState = {
	users: [],
	isLoading: false
}

const GithubContext = createContext()

const GithubProvider = ({ children }) => {
	const [state, dispatch] = useReducer(githubReducer, initialState)

	// Get search results
	const searchUsers = async (text) => {
		setLoading()
		
		const params = new URLSearchParams({
			q: text
		})

		const response = await fetch(`${process.env.GITHUB_URL}/search/users?${params}`, {
			headers: {
				Authorization: `token ${process.env.GITHUB_TOKEN}`
			}			
		})

		const { items } = await response.json()
		dispatch({
			type: 'GET_USERS',
			payload: items
		})
	}

	const clearUsers = () => {
		dispatch({
			type: 'CLEAR_SEARCH'
		})
	}

	const setLoading = () => {
		dispatch({
			type: 'SET_LOADING'
		})
	}

	return (
		<GithubContext.Provider value={{
			users: state.users,
			isLoading: state.isLoading,
			searchUsers,
			clearUsers
		}}>
			{ children }
		</GithubContext.Provider>
	)
}

export {
	GithubContext,
	GithubProvider
}