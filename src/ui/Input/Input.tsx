import { ChangeEventHandler, FunctionComponent } from 'react'
import styles from './Input.module.scss'

interface IProps {
    name: string
    placeholder?: string
    handleOnChange: ChangeEventHandler<HTMLInputElement>
    isError?: boolean
}

const Input: FunctionComponent<IProps> = ({ name, placeholder, handleOnChange, isError }) => (
    <input
        className={`${styles['Input']} ${isError && styles['Input--error']}`}
        placeholder={placeholder}
        name={name}
        onChange={handleOnChange}
    ></input>
)

export default Input
