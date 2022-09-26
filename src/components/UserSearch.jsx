import { useState, useContext  } from 'react'
import { GithubContext } from '../context/github/GitHubContext'

const UserSearch = () => {
	const [text, setText] = useState('')
	const { users, searchUsers, clearUsers } = useContext(GithubContext)

	const handleChange = (e) => {
		const { value } = e.target
		setText(value)
		console.log(value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		
		if (text === 0) {
			alert('Please enter somethign to search for!')
		} else {
			// Search Users
			searchUsers(text )
			setText('')
		} 
	}

	const handleClear = () => {
		clearUsers()
	}

	return (
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
	)
}

export default UserSearch