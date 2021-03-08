import { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import pages from '../../data/pages'
import styles from './NavigationMenu.module.scss'

interface IProps {
    pathname: string
    showNavigationMenu: boolean
    setShowNavigationMenu: Dispatch<SetStateAction<boolean>>
}

const NavigationMenu: FunctionComponent<IProps> = ({ pathname, showNavigationMenu, setShowNavigationMenu }) => {
    return (
        <ul
            className={`${styles['NavigationMenu']} ${
                showNavigationMenu && styles['NavigationMenu--expanded']
            } bg-color-light pl-8 pt-6`}
        >
            {pages.map(({ name, path }) => {
                return (
                    <li key={name} className={`${styles['NavigationMenu__item']} mb-6`}>
                        <Link
                            className={`${styles['NavigationMenu__link']} ${
                                pathname === path && styles['NavigationMenu__link--active']
                            } textWeight-semibold`}
                            to={path}
                            onClick={() => setShowNavigationMenu(false)}
                        >
                            {name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavigationMenu
