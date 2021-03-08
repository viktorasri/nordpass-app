import { useState, useEffect, FunctionComponent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavigationList from '../NavigationList/NavigationList'
import NavigationIcon from '../NavigationIcon/NavigationIcon'
import NavigationMenu from '../NavigationMenu/NavigationMenu'
import Button from '../../../ui/Button/Button'
import Icon from '../../../ui/Icon/Icon'
import useWindowsWidth from '../../../data/hooks/useWindowWidth'
import styles from './NavigationBar.module.scss'

const NavigationBar: FunctionComponent = () => {
    const [showNavigationMenu, setShowNavigationMenu] = useState(false)
    const { pathname } = useLocation()
    const windowWidth = useWindowsWidth()

    useEffect(() => {
        //close navigation menu at breakpoint
        if (windowWidth >= 768) {
            setShowNavigationMenu(false)
        }
    }, [windowWidth])

    const toggleShowNavigation = () => {
        setShowNavigationMenu(!showNavigationMenu)
    }

    return (
        <nav className={`${styles['NavigationBar']} color__bg--light`}>
            <div className={`${styles['NavigationBar__innerWrapper']} px--4 mx--auto`}>
                <Link to="/" onClick={() => setShowNavigationMenu(false)}>
                    <Icon variant="logo" />
                </Link>
                <div className={styles['NavigationBar__listContainer']}>
                    <NavigationList pathname={pathname} />
                    <Button
                        variant="link"
                        path="/vault"
                        size="3"
                        color="primary"
                        handleOnClick={() => setShowNavigationMenu(false)}
                    >
                        Open Vault
                    </Button>
                    <NavigationIcon
                        showNavigationMenu={showNavigationMenu}
                        toggleShowNavigation={toggleShowNavigation}
                    />
                </div>
            </div>
            <NavigationMenu
                pathname={pathname}
                showNavigationMenu={showNavigationMenu}
                setShowNavigationMenu={setShowNavigationMenu}
            />
        </nav>
    )
}

export default NavigationBar
