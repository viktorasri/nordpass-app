import { useState, useEffect, useRef, FunctionComponent } from 'react'
import Icon from '../../ui/Icon/Icon'
import Button from '../../ui/Button/Button'
import styles from './Collapsible.module.scss'

interface IProps {
    title: string
    expanded?: boolean
}

const Collapsible: FunctionComponent<IProps> = ({ children, title, expanded = false }) => {
    const [isExpanded, setIsExpanded] = useState(expanded)
    const [windowWidth, setWindowWidth] = useState(0)
    const [collapsibleHeight, setCollapsibleHeight] = useState(0)
    const elRef = useRef<HTMLDivElement>(null)
    const currentHeight = isExpanded ? collapsibleHeight : 0

    useEffect(() => {
        const updateWindowWidth = () => {
            if (elRef.current) {
                setWindowWidth(window.innerWidth)
            }
        }
        window.addEventListener('resize', updateWindowWidth)

        return () => window.removeEventListener('resize', updateWindowWidth)
    }, [])

    useEffect(() => {
        if (elRef.current) {
            setCollapsibleHeight(elRef.current.clientHeight)
        }
    }, [windowWidth])

    const toggleIsExpanded = () => {
        if (elRef.current) {
            setIsExpanded(!isExpanded)
            setCollapsibleHeight(elRef.current.clientHeight)
        }
    }

    return (
        <div
            className={`${styles['Collapsible']} ${
                isExpanded && styles['Collapsible--expanded']
            } color__bg--white mb--3`}
        >
            <div className="pt--4 pr--5 pl--4">
                <div className={`${styles['Collapsible__title']} mb--4`} onClick={toggleIsExpanded}>
                    <h4 className="texWeight--bold">{title}</h4>
                    <Button variant="button" handleOnClick={toggleIsExpanded}>
                        <Icon variant={isExpanded ? 'arrowUp' : 'arrowDown'} />
                    </Button>
                </div>
                <div className={styles['Collapsible__content']} style={{ height: currentHeight + 'px' }}>
                    <div ref={elRef}>{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Collapsible
