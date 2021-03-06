import { FunctionComponent } from 'react'
import styles from './Heading.module.scss'

interface IProps {
    variant?: string
    size?: string
}

const Heading: FunctionComponent<IProps> = ({ children, variant, size = '1' }) => {
    if (variant === 'h2') {
        return <h2 className={`${styles['Heading']} ${styles[`Heading--size-${size}`]}`}>{children}</h2>
    }
    if (variant === 'h3') {
        return <h3 className={`${styles['Heading']} ${styles[`Heading--size-${size}`]}`}>{children}</h3>
    }
    if (variant === 'h4') {
        return <h4 className={`${styles['Heading']} ${styles[`Heading--size-${size}`]}`}>{children}</h4>
    }
    if (variant === 'h5') {
        return <h5 className={`${styles['Heading']} ${styles[`Heading--size-${size}`]}`}>{children}</h5>
    }
    if (variant === 'h6') {
        return <h6 className={`${styles['Heading']} ${styles[`Heading--size-${size}`]}`}>{children}</h6>
    }

    return <h1 className={`${styles['Heading']} ${styles[`Heading--size-${size}`]}`}>{children}</h1>
}

export default Heading
