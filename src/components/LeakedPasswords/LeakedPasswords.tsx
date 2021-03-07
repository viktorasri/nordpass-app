import { useState, useEffect } from 'react'
import LeakedList from '../LeakedList/LeakedList'
import Heading from '../../ui/Heading/Heading'
import Button from '../../ui/Button/Button'
import styles from './LeakedPasswords.module.scss'

const LeakedPasswords = () => {
    // const [leakedPasswordList] = useState(leakedPasswordData)
    // const [sortOption, setSortOption] = useState('abc')
    // const [sortedList, setSortedList] = useState([])
    const [leakedPasswordList, setLeakedPasswordList] = useState([])

    useEffect(() => {
        const getPasswordData = async () => {
            const response = await fetch('/v2/worst-psw.json')
            const data = await response.json()
            setLeakedPasswordList(data)
        }
        getPasswordData()
    }, [])

    useEffect(() => {
        console.log(leakedPasswordList)
    }, [leakedPasswordList])

    return (
        <section className={styles['LeakedPasswords']}>
            <Heading variant="h3" size="2" mb="2">
                Top leaked passwords
            </Heading>
            <div className={styles['LeakedPasswords__listTitle']}>
                <Heading variant="h6" size="6">
                    Passwords
                </Heading>

                <select>
                    <option>Count</option>
                    <option>ABC</option>
                </select>
            </div>
            <LeakedList />
            <Button variant="button" size="2" color="primary">
                Show all (50)
            </Button>
        </section>
    )
}

export default LeakedPasswords
