import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import NavigationList from '../NavigationList/NavigationList'
import NavigationIcon from '../NavigationIcon/NavigationIcon'
import Button from '../../ui/Button/Button'
import Icon from '../../ui/Icon/Icon'
import styles from './NavigationBar.module.scss'

const NavigationBar: FunctionComponent = () => {
    return (
        <nav className={styles['NavigationBar']}>
            <Link to="/">
                <Icon variant="logo" />
            </Link>
            <div className={styles['NavigationBar__innerWrapper']}>
                <NavigationList />
                <Button variant="link" href="/vault" size="3" color="primary">
                    Open Vault
                </Button>
                <NavigationIcon />
            </div>
        </nav>
    )
}

export default NavigationBar
