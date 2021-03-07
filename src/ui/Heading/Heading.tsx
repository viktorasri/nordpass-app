import { FunctionComponent } from 'react'
import styles from './Heading.module.scss'

interface IProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    size: '1' | '2' | '3' | '4' | '5' | '6'
}

const Heading: FunctionComponent<IProps> = ({ children, variant, size }) => {
    const HeadingTag = variant as keyof JSX.IntrinsicElements

    return <HeadingTag className={`${styles['Heading']} ${styles[`Heading--size-${size}`]}`}>{children}</HeadingTag>
}

export default Heading
