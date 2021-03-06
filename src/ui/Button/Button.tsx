import { FunctionComponent } from 'react'
import styles from './Button.module.scss'

interface IProps {
    variant?: string
    size?: string
    href?: string
    handleOnClick?: () => void
    isDisabled?: boolean
}

const Button: FunctionComponent<IProps> = ({
    children,
    variant = 'button',
    size,
    href = '',
    handleOnClick,
    isDisabled
}) => {
    if (variant === 'link') {
        return (
            <a className={`${styles['Button']} ${styles[`Button--size-${size}`]}`} href={href}>
                {children}
            </a>
        )
    }

    return (
        <button
            className={`${styles['Button']} ${styles[`Button--size-${size}`]}`}
            onClick={handleOnClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
}

export default Button
