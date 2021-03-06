import { useState, useEffect, useRef, FunctionComponent } from 'react'
import Icon from '../../ui/Icon/Icon'
import Button from '../../ui/Button/Button'
import useWindowsWidth from '../../data/hooks/useWindowWidth'
import styles from './Collapsible.module.scss'

interface IProps {
    title: string
}

const Collapsible: FunctionComponent<IProps> = ({ children, title }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const windowWidth = useWindowsWidth()
    const [collapsibleHeight, setCollapsibleHeight] = useState(0)
    const elRef = useRef<HTMLDivElement>(null)
    const currentHeight = isExpanded ? collapsibleHeight : 0

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
