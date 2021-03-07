import { FunctionComponent } from 'react'
import styles from './Icon.module.scss'

interface IProps {
    variant: 'logo' | 'arrowDown' | 'arrowUp' | 'warning'
}

const Icon: FunctionComponent<IProps> = ({ variant }) => {
    let src
    let alt
    switch (variant) {
        case 'logo':
            src = '/images/nordpass-logo.svg'
            alt = 'NordPass logo'
            break
        case 'arrowDown':
            src = '/images/arrow-down.svg'
            alt = 'Arrow down'
            break
        case 'arrowUp':
            src = '/images/arrow-up.svg'
            alt = 'Arrow up'
            break
        case 'warning':
            src = '/images/warning.svg'
            alt = 'Warning sign'
            break
    }
    return <img className={styles['Icon']} src={src} alt={alt}></img>
}
export default Icon
