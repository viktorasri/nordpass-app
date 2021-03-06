import { FunctionComponent } from 'react'
import styles from './NavigationIcon.module.scss'

interface IProps {
    showNavigationMenu: boolean
    toggleShowNavigation: () => void
}

const NavigationIcon: FunctionComponent<IProps> = ({ showNavigationMenu, toggleShowNavigation }) => {
    return (
        <button
            className={`${styles['NavigationIcon']} ${showNavigationMenu && styles['NavigationIcon--active']}`}
            onClick={toggleShowNavigation}
        >
            <span className={styles['NavigationIcon__decoration']}></span>
            <span className={styles['NavigationIcon__decoration']}></span>
            <span className={styles['NavigationIcon__decoration']}></span>
        </button>
    )
}

export default NavigationIcon
