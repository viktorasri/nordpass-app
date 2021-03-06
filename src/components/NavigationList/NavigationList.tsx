import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavigationList.module.scss'

const links = [
    { name: 'features', path: '/features' },
    { name: 'pricing', path: '/pricing' },
    { name: 'apps', path: '/apps' },
    { name: 'blog', path: '/blog' },
    { name: 'help', path: '/help' },
    { name: 'my account', path: '/my-account' }
]

const NavigationList: FunctionComponent = () => {
    return (
        <>
            <ul className={styles['NavigationList']}>
                {links.map(({ name, path }) => {
                    return (
                        <li key={name} className={styles['NavigationList__listItem']}>
                            <Link className={styles['NavigationList__link']} to={path}>
                                {name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default NavigationList
