import { FunctionComponent } from 'react'
import styles from './NavigationIcon.module.scss'

const NavigationIcon: FunctionComponent = () => {
    return (
        <button className={`${styles['NavigationIcon']}`}>
            <span className={styles['NavigationIcon__decoration']}></span>
            <span className={styles['NavigationIcon__decoration']}></span>
            <span className={styles['NavigationIcon__decoration']}></span>
        </button>
    )
}

export default NavigationIcon
