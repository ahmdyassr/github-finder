import { Link } from 'react-router-dom'

const Navbar = ({ title }) => {
	return (
		<nav className='navbar'>
			<span className='left'>
				<Link to='/' className='navbar__link'>{title}</Link>
			</span>
			

			<span className='right'>
				<Link to='/' className='navbar__link'>Home</Link>
				<Link to='/about' className='navbar__link'>About</Link>
			</span>
		</nav>
	)
}

export default Navbar