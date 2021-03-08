import { ChangeEventHandler, FunctionComponent } from 'react'
import styles from './Select.module.scss'

interface IProps {
    handleOnChange: ChangeEventHandler<HTMLSelectElement>
}

const Select: FunctionComponent<IProps> = ({ children, handleOnChange }) => (
    <select className={styles['Select']} onChange={handleOnChange}>
        {children}
    </select>
)

export default Select
