import { useContext } from 'react'
import { BeatLoader } from 'react-spinners'
import { GithubContext } from '../context/github/GitHubContext'
import UserItem from './UserItem'

const UserResults = () => {
	const { users, isLoading } = useContext(GithubContext)

	if ( !isLoading ) {
		return (
			<div className="users">
				{
					users.map((user) => {
						return (
							<UserItem key={user.id} user={user} />
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