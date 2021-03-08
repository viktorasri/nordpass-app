import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavigationBar from '../components/Navigation/NavigationBar/NavigationBar'
import Home from '../pages/Home'
import Features from '../pages/Features'
import Pricing from '../pages/Pricing'
import Apps from '../pages/Apps'
import Blog from '../pages/Blog'
import Help from '../pages/Help'
import MyAccount from '../pages/MyAccount'
import Vault from '../pages/Vault'
import Footer from '../components/Footer/Footer'
import styles from './App.module.scss'

function App() {
    return (
        <Router>
            <div className={styles['App']}>
                <header>
                    <NavigationBar />
                </header>
                <main className={styles['App__content']}>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/features">
                            <Features />
                        </Route>
                        <Route path="/pricing">
                            <Pricing />
                        </Route>
                        <Route path="/apps">
                            <Apps />
                        </Route>
                        <Route path="/blog">
                            <Blog />
                        </Route>
                        <Route path="/help">
                            <Help />
                        </Route>
                        <Route path="/my-account">
                            <MyAccount />
                        </Route>
                        <Route path="/vault">
                            <Vault />
                        </Route>
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
