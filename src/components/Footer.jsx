const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='footer'>
			<p className='footer__rights'>Github Finder © {currentYear} - All Rights Reserved.</p>
		</footer>
	)
}

export default Footer