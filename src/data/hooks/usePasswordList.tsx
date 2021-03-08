import { useEffect, useState } from 'react'
import leakedPasswordData from '../../data/leakedPasswordData'

const usePasswordList = () => {
    const [passwordList, setPasswordList] = useState([] as { value: string; count: string }[])
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
