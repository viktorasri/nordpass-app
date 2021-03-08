import { useEffect, useState } from 'react'
import leakedPasswordData from '../../data/leakedPasswordData'
import { LeakedPassword } from '../../types'

const usePasswordList = () => {
    const [passwordList, setPasswordList] = useState([] as LeakedPassword[])
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

    return passwordList
}

export default usePasswordList
