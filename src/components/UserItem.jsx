import { Link } from 'react-router-dom'

const UserItem = ({ user }) => {
	const {login, avatar_url} = user

	return (
		<div className="user">
			<div className="user__image">
				<img src={avatar_url} alt={login} />
			</div>
			<div className="user__meta">
				<p className="user__name">{login}</p>
				<Link className="user__link" to={`/user/${login}`}>Visit Profile</Link>
			</div>
		</div>
	)
}

export default UserItem