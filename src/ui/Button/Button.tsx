import { FunctionComponent } from 'react'
import styles from './Button.module.scss'

interface IProps {
    variant: 'button' | 'link'
    size: '1' | '2' | '3'
    color?: 'primary'
    href?: string
    handleOnClick?: () => void
    isDisabled?: boolean
}

const Button: FunctionComponent<IProps> = ({
    children,
    variant,
    size,
    color,
    href = '',
    handleOnClick,
    isDisabled
}) => {
    if (variant === 'link') {
        return (
            <a
                className={`${styles['Button']} ${styles[`Button--size-${size}`]} ${styles[`Button--color-${color}`]}`}
                href={href}
            >
                {children}
            </a>
        )
    }

    return (
        <button
            className={`${styles['Button']} ${styles[`Button--size-${size}`]} ${styles[`Button--color-${color}`]}`}
            onClick={handleOnClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
}

export default Button
