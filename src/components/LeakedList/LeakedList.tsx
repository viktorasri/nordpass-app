import { FunctionComponent } from 'react'
import styles from './LeakedList.module.scss'

interface IProps {
    sortedList: { value: string; count: string }[]
    listLength: number
}

const LeakedList: FunctionComponent<IProps> = ({ sortedList, listLength }) => {
    return (
        <ol className={styles['LeakedList']}>
            {sortedList.slice(0, listLength).map(({ value, count }) => {
                return (
                    <li key={value} className={styles['LeakedList__item']}>
                        <div className={styles['LeakedList__itemText']}>
                            <span className={styles['LeakedList__itemTitle']}>{value}</span>
                            <span>{count}</span>
                        </div>
                    </li>
                )
            })}
        </ol>
    )
}

export default LeakedList
