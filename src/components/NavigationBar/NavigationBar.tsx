import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import NavigationList from '../NavigationList/NavigationList'
import NavigationIcon from '../NavigationIcon/NavigationIcon'
import Icon from '../../ui/Icon/Icon'
import styles from './NavigationBar.module.scss'

const NavigationBar: FunctionComponent = () => {
    return (
        <nav className={styles['NavigationBar']}>
            <Link to="/">
                <Icon variant="logo" />
            </Link>
            <NavigationList />
            <NavigationIcon />
        </nav>
    )
}

export default NavigationBar
