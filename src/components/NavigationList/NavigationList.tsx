import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import pages from '../../data/pages'
import styles from './NavigationList.module.scss'

interface IProps {
    pathname: string
}

const NavigationList: FunctionComponent<IProps> = ({ pathname }) => {
    return (
        <ul className={styles['NavigationList']}>
            {pages.map(({ name, path }) => {
                return (
                    <li key={name} className={`${styles['NavigationList__item']} mr--6`}>
                        <Link
                            className={`${styles['NavigationList__link']} ${
                                pathname === path && styles['NavigationList__link--active']
                            } size--5 textWeight--semibold`}
                            to={path}
                        >
                            {name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavigationList
