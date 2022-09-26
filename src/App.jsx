import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { GithubProvider } from './context/github/GitHubContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

const App = () => {
	return (
		<GithubProvider>
			<Router>
				<Navbar title='Github Finder'/>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='*' element={<NotFound />} />
				</Routes>

				<Footer />
			</Router>
		</GithubProvider>
	)
}

export default App