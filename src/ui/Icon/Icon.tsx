import { FunctionComponent } from 'react'
import styles from './Icon.module.scss'

interface IProps {
    variant: 'logo'
}

const Icon: FunctionComponent<IProps> = ({ variant }) => {
    let src
    let alt
    switch (variant) {
        case 'logo':
            src = '/images/nordpass-logo.svg'
            alt = 'NordPass logo'
            break
    }
    return <img className={styles['Icon']} src={src} alt={alt}></img>
}
export default Icon
