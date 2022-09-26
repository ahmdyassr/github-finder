import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className='notfound'>
			<h1 className='notfound__title'>404 — Not Found</h1>
			<p className='notfound__text'>The page you're not looking for!</p>
			<Link className='notfound__link' to='/'>Back to Home</Link>
		</div>
	)
}

export default NotFound