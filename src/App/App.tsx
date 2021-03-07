import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Home from '../pages/Home/Home'
import Features from '../pages/Features/Features'
import Pricing from '../pages/Pricing/Pricing'
import Apps from '../pages/Apps/Apps'
import Blog from '../pages/Blog/Blog'
import Help from '../pages/Help/Help'
import MyAccount from '../pages/MyAccount/MyAccount'
import Vault from '../pages/Vault/Vault'
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
