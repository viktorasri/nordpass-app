import { useState, useEffect, ChangeEventHandler } from 'react'
import Heading from '../../ui/Heading/Heading'
import Button from '../../ui/Button/Button'
import Select from '../../ui/Select/Select'
import styles from './LeakedPasswordList.module.scss'
import usePasswordList from '../../data/hooks/usePasswordList'
import { getSortedPasswordListByCount, getSortedPasswordListByName } from '../../utils'
import { LeakedPassword } from '../../types'

const LeakedPasswordList = () => {
    const leakedPasswordList = usePasswordList()
    const [sortOption, setSortOption] = useState('count')
    const [sortedList, setSortedList] = useState<LeakedPassword[]>([])
    const [showAllList, setShowAllList] = useState(false)
    const [listLength, setListLength] = useState(10)

    useEffect(() => {
        if (leakedPasswordList.length > 0) {
            if (sortOption === 'count') {
                setSortedList(getSortedPasswordListByCount(leakedPasswordList))
            }

            if (sortOption === 'abc') {
                setSortedList(getSortedPasswordListByName(leakedPasswordList))
            }
        }
    }, [leakedPasswordList, sortOption])

    const toggleListLength = () => {
        if (!showAllList) {
            setShowAllList(true)
            setListLength(50)
        }
        if (showAllList) {
            setShowAllList(false)
            setListLength(10)
        }
    }

    const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
        setSortOption(e.target.value)
    }

    return (
        <section className={`${styles['LeakedPasswordList']} text--centered mx--auto p--4 lg__pb--8`}>
            <div className="mb--8">
                <Heading variant="h3" size="2">
                    Top leaked passwords
                </Heading>
            </div>
            <div className={`${styles['LeakedPasswordList__headerRow']} pb--6`}>
                <div className="mr--3">
                    <Heading variant="h6" size="3">
                        Passwords
                    </Heading>
                </div>
                <Select handleOnChange={handleSelect}>
                    <option value="count">Count</option>
                    <option value="abc">ABC</option>
                </Select>
            </div>
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
            <div className="mt--7 lg__pb--7">
                <Button variant="button" size="2" color="primary" handleOnClick={toggleListLength}>
                    {!showAllList ? `Show all (50)` : `Show less (10)`}
                </Button>
            </div>
        </section>
    )
}

export default LeakedPasswordList
