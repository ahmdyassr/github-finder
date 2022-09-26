import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const initialState = {
	users: [],
	user: {},
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

	// Get A single user
	const getUser = async (login) => {
		setLoading()
		
		const response = await fetch(`${process.env.GITHUB_URL}/users/${login}`, {
			headers: {
				Authorization: `token ${process.env.GITHUB_TOKEN}`
			}			
		})

		if ( response.status === 404 ){
			window.location = '/notfound'
		} else {
			const data = await response.json()
			dispatch({
				type: 'GET_USER',
				payload: data
			})
		}
		
	}

	return (
		<GithubContext.Provider value={{
			users: state.users,
			isLoading: state.isLoading,
			user: state.user,
			searchUsers,
			clearUsers,
			getUser
		}}>
			{ children }
		</GithubContext.Provider>
	)
}

export {
	GithubContext,
	GithubProvider
}