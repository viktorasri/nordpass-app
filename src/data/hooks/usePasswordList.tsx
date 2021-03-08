import { useEffect, useState } from 'react'
import leakedPasswordData from '../../data/leakedPasswordData'

type LeakedPassword = {
    value: string
    count: string
}

const usePasswordList = (initialSortOption: string) => {
    const [passwordList, setPasswordList] = useState([] as LeakedPassword[])
    const [sortedList, setSortedList] = useState([] as LeakedPassword[])
    const [sortOption, setSortOption] = useState(initialSortOption)

    useEffect(() => {
        const getPasswordData = async () => {
            try {
                const response = await fetch('/v2/worst-psw.json')
                const data = await response.json()
                setPasswordList(data.passwords)
            } catch (e) {
                setPasswordList(leakedPasswordData)
            }
        }
        getPasswordData()
    }, [])

    useEffect(() => {
        if (passwordList.length > 0) {
            if (sortOption === 'count') {
                setSortedList(getSortedPasswordListByCount(passwordList))
            }

            if (sortOption === 'abc') {
                setSortedList(getSortedPasswordListByName(passwordList))
            }
        }
    }, [passwordList, sortOption])

    return { sortedList, setSortOption }
}

export default usePasswordList

const getSortedPasswordListByCount = (list: LeakedPassword[]) => {
    const sortedList = [...list].sort((a, b) => parseInt(b.count) - parseInt(a.count))
    return sortedList
}

const getSortedPasswordListByName = (list: LeakedPassword[]) => {
    const sortedList = [...list].sort((a, b) => {
        if (a.value < b.value) {
            return -1
        }
        if (a.value > b.value) {
            return 1
        }
        return 0
    })
    return sortedList
}
