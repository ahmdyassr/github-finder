import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { GithubProvider } from './context/github/GitHubContext'
import { AlertProvider } from './context/alert/AlertContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import NotFound from './pages/NotFound'

const App = () => {
	return (
		<GithubProvider>
			<AlertProvider>
				<Router>
					<Navbar title='Github Finder'/>

					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/user/:login' element={<User />} />
						<Route path='/about' element={<About />} />
						<Route path='*' element={<NotFound />} />
					</Routes>

					<Footer />
				</Router>
			</AlertProvider>
		</GithubProvider>
	)
}

export default App