import { useState, useEffect } from 'react'
import LeakedList from '../LeakedList/LeakedList'
import Heading from '../../ui/Heading/Heading'
import Button from '../../ui/Button/Button'
import styles from './LeakedPasswords.module.scss'
import { getSortedPasswordListByCount, getSortedPasswordListByName } from '../../helpers'

const LeakedPasswords = () => {
    const [leakedPasswordList, setLeakedPasswordList] = useState([])
    const [sortOption, setSortOption] = useState('count')
    const [sortedList, setSortedList] = useState<{ value: string; count: string }[]>([])
    const [showAllList, setShowAllList] = useState(false)
    const [listLength, setListLength] = useState(20)

    useEffect(() => {
        const getPasswordData = async () => {
            const response = await fetch('/v2/worst-psw.json')
            const data = await response.json()
            setLeakedPasswordList(data.passwords)
        }
        getPasswordData()
    }, [])

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
            setListLength(20)
        }
    }

    return (
        <section className={styles['LeakedPasswords']}>
            <Heading variant="h3" size="2" mb="2">
                Top leaked passwords
            </Heading>
            <div className={styles['LeakedPasswords__listTitle']}>
                <Heading variant="h6" size="6">
                    Passwords
                </Heading>

                <select onChange={(e) => setSortOption(e.target.value)}>
                    <option value="count">Count</option>
                    <option value="abc">ABC</option>
                </select>
            </div>
            <LeakedList sortedList={sortedList} listLength={listLength} />
            <div className={styles['LeakedPasswords__buttonWrapper']}>
                <Button variant="button" size="2" color="primary" handleOnClick={toggleListLength}>
                    {!showAllList ? `Show all (50)` : `Show less (20)`}
                </Button>
            </div>
        </section>
    )
}

export default LeakedPasswords
