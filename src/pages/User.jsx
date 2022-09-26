import { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { GithubContext } from '../context/github/GitHubContext'

const User = () => { 
	const { getUser, user, isLoading } = useContext(GithubContext)  
	const params = useParams()
	const {
		name,
		type,
		avatar_url,
		location,
		bio,
		blog,
		twitter_username,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_guests,
		hirable
	} = user

	useEffect(() => {
		getUser(params.login)
	}, [])

	if (!isLoading) {
		return (
			<div className="profile">
				<div className="profileHeader">
					<Link to='/'>Back to Search</Link>

					<div className="profileBio">
						<div className="profileAvatar">
							<div className="profileImage">
								<img src={avatar_url} alt={name} />
							</div>
							<div className="profileMeta">
								<h3>{name}</h3>
								<p>{login}</p>
							</div>
						</div>

						<div className="profileContent">
							<div className="profileContentHeader">
								<h3>{name}</h3>
								<div className="label">
									{type}
								</div>
								{
									hirable && (
										<div className="label">Hirable</div>
									)
								}
							</div>
							
							<p>{bio}</p>
							<a className="profileContentLink" href={html_url}>Vist Github Profile</a>
						</div>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<BeatLoader color='#007AFF' />
		)
	}
	
}

export default User