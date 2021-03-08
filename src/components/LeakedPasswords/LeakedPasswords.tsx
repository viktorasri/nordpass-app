import { useState, useEffect, ChangeEventHandler } from 'react'
import LeakedPasswordList from '../LeakedPasswordList/LeakedPasswordList'
import Heading from '../../ui/Heading/Heading'
import Button from '../../ui/Button/Button'
import Select from '../../ui/Select/Select'
import styles from './LeakedPasswords.module.scss'
import { getSortedPasswordListByCount, getSortedPasswordListByName } from '../../helpers'

const LeakedPasswords = () => {
    const [leakedPasswordList, setLeakedPasswordList] = useState([])
    const [sortOption, setSortOption] = useState('count')
    const [sortedList, setSortedList] = useState<{ value: string; count: string }[]>([])
    const [showAllList, setShowAllList] = useState(false)
    const [listLength, setListLength] = useState(10)

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
            setListLength(10)
        }
    }

    const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
        setSortOption(e.target.value)
    }

    return (
        <section className={`${styles['LeakedPasswords']} text-centered mx-auto p-4 lg-pb-8`}>
            <div className="mb-8">
                <Heading variant="h3" size="2">
                    Top leaked passwords
                </Heading>
            </div>
            <div className={`${styles['LeakedPasswords__listTitle']} pb-6`}>
                <Heading variant="h6" size="3">
                    Passwords
                </Heading>
                <Select handleOnChange={handleSelect}>
                    <option value="count">Count</option>
                    <option value="abc">ABC</option>
                </Select>
            </div>
            <LeakedPasswordList sortedList={sortedList} listLength={listLength} />
            <div className="mt-7 lg-pb-7">
                <Button variant="button" size="2" color="primary" handleOnClick={toggleListLength}>
                    {!showAllList ? `Show all (50)` : `Show less (10)`}
                </Button>
            </div>
        </section>
    )
}

export default LeakedPasswords
