import { useState, useEffect } from 'react'

const useWindowsWidth = () => {
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        if (window) {
            const updateWindowWidth = () => {
                setWindowWidth(window.innerWidth)
            }
            window.addEventListener('resize', updateWindowWidth)

            return () => window.removeEventListener('resize', updateWindowWidth)
        }
    }, [])

    return windowWidth
}

export default useWindowsWidth
