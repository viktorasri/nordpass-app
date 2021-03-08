import { useState, useEffect, FunctionComponent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavigationList from '../NavigationList/NavigationList'
import NavigationIcon from '../NavigationIcon/NavigationIcon'
import Button from '../../ui/Button/Button'
import Icon from '../../ui/Icon/Icon'
import styles from './NavigationBar.module.scss'

const NavigationBar: FunctionComponent = () => {
    const [showNavigationMenu, setShowNavigationMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)
    const { pathname } = useLocation()

    //closes navigation menu when window size reaches point where navigation bar links are visible
    useEffect(() => {
        if (window) {
            const updateWindowWidth = (): void => {
                setWindowWidth(window.innerWidth)
            }
            window.addEventListener('resize', updateWindowWidth)

            if (windowWidth >= 768) {
                setShowNavigationMenu(false)
            }
            return () => window.removeEventListener('resize', updateWindowWidth)
        }
    }, [windowWidth, setShowNavigationMenu])

    const toggleShowNavigation = () => {
        setShowNavigationMenu(!showNavigationMenu)
    }

    return (
        <nav className={`${styles['NavigationBar']} bg-color-light`}>
            <div className={`${styles['NavigationBar__innerWrapper']} px-4 mx-auto`}>
                <Link to="/">
                    <Icon variant="logo" />
                </Link>
                <div className={styles['NavigationBar__listContainer']}>
                    <NavigationList pathname={pathname} />
                    <Button variant="link" path="/vault" size="3" color="primary">
                        Open Vault
                    </Button>
                    <NavigationIcon
                        showNavigationMenu={showNavigationMenu}
                        toggleShowNavigation={toggleShowNavigation}
                    />
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar
