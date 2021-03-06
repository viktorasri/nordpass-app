import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

interface IProps {
    variant: 'button' | 'link'
    size: '1' | '2' | '3'
    color?: 'primary'
    path?: string
    handleOnClick?: () => void
    isDisabled?: boolean
}

const Button: FunctionComponent<IProps> = ({
    children,
    variant,
    size,
    color,
    path = '',
    handleOnClick,
    isDisabled
}) => {
    if (variant === 'link') {
        return (
            <Link
                className={`${styles['Button']} ${styles[`Button--size-${size}`]} ${styles[`Button--color-${color}`]}`}
                to={path}
            >
                {children}
            </Link>
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
