import { useState, useEffect } from 'react'
import { BeatLoader } from 'react-spinners'

const UserResults = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetchUsers()
	}, [])

	const fetchUsers = async () => {
		const response = await fetch(`${process.env.GITHUB_URL}/users`, {
			headers: {
				Authorization: `token ${process.env.GITHUB_TOKEN}`
			}			
		})

		const data = await response.json()
		setUsers(data)
		setIsLoading(false)
	}

	if ( !isLoading ) {
		return (
			<div className="users">
				{
					users.map((user) => {
						return (
							<div className="user" key={user.id}>
								<p className="user__name">{user.login}</p>
							</div>
						)
					})
				}
	
			</div>
		)
	} else {
		return (
			<BeatLoader color='#007AFF' />
		)
	}
}

export default UserResults 