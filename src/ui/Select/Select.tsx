import { ChangeEventHandler, FunctionComponent } from 'react'
import styles from './Select.module.scss'

interface IProps {
    handleOnChange: ChangeEventHandler<HTMLSelectElement>
}

const Select: FunctionComponent<IProps> = ({ children, handleOnChange }) => (
    <select className={`${styles['Select']} color--dark-grey ml--3 pl--2`} onChange={handleOnChange}>
        {children}
    </select>
)

export default Select
