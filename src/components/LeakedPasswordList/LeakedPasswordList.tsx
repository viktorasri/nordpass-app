import { FunctionComponent } from 'react'
import styles from './LeakedPasswordList.module.scss'

interface IProps {
    sortedList: { value: string; count: string }[]
    listLength: number
}

const LeakedPasswordList: FunctionComponent<IProps> = ({ sortedList, listLength }) => {
    return (
        <ol className="ml--4">
            {sortedList.slice(0, listLength).map(({ value, count }) => {
                return (
                    <li key={value} className={`${styles['LeakedPasswordList__item']} py--6 pl--6`}>
                        <div className={styles['LeakedPasswordList__itemText']}>
                            <span className={styles['LeakedPasswordList__itemTitle']}>{value}</span>
                            <span>{count}</span>
                        </div>
                    </li>
                )
            })}
        </ol>
    )
}

export default LeakedPasswordList
