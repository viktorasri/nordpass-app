import { FunctionComponent } from 'react'
import Icon from '../Icon/Icon'
import styles from './ErrorMessage.module.scss'

const ErrorMessage: FunctionComponent = ({ children }) => (
    <div className={styles['ErrorMessage']}>
        <Icon variant="warning" /> <span className={styles['ErrorMessage__text']}>{children}</span>
    </div>
)

export default ErrorMessage
