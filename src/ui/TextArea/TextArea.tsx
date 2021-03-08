import { ChangeEventHandler, FunctionComponent } from 'react'
import styles from './TextArea.module.scss'

interface IProps {
    name: string
    placeholder?: string
    rows: number
    handleOnChange: ChangeEventHandler<HTMLTextAreaElement>
    noResize?: boolean
    isError?: boolean
}

const TextArea: FunctionComponent<IProps> = ({ name, placeholder, rows, handleOnChange, noResize, isError }) => (
    <textarea
        className={`${styles['TextArea']} ${isError && styles['TextArea--error']} ${
            noResize && styles['TextArea--noResize']
        }`}
        name={name}
        placeholder={placeholder}
        rows={rows}
        onChange={handleOnChange}
    ></textarea>
)

export default TextArea
