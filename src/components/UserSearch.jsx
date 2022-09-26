import { useState, useContext  } from 'react'
import { GithubContext } from '../context/github/GitHubContext'
import { AlertContext } from '../context/alert/AlertContext'
import Alert from './Alert'

const UserSearch = () => {
	const [text, setText] = useState('')
	const { users, searchUsers, clearUsers } = useContext(GithubContext)
	const { setAlert } = useContext(AlertContext)

	const handleChange = (e) => {
		const { value } = e.target
		setText(value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		
		if (text.length === 0) {
			setAlert('Please enter somethign to search for!', 'error')
		} else {
			searchUsers(text )
			setText('')
		} 
	}

	const handleClear = () => {
		clearUsers()
	}

	return (
		<>

			<Alert type='Error' msg='Please, enter something to search for!' />

			<form className="userSearch" onSubmit={handleSubmit}>
				<div className="userSearch__input">
					<input 
						type="text"
						placeholder="Search here..."
						value={text}
						onChange={handleChange}
					/>
				</div>
				<button 
					className="userSearch__button"
					type="submit"
				>Go</button>

				{ users.length > 0 && (
					<button className="userSearch__inputClear" onClick={handleClear}>
						Clear
					</button>
				)}
			</form>
		</>
	)
}

export default UserSearch