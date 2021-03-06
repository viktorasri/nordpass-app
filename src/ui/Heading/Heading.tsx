import { FunctionComponent } from 'react'
import styles from './Heading.module.scss'

interface IProps {
    variant?: string
    size?: string
    color?: string
    mb?: string
}

const Heading: FunctionComponent<IProps> = ({ children, variant = 'h1', size = '1', color, mb }) => {
    const CustomTag = variant as keyof JSX.IntrinsicElements

    return (
        <CustomTag
            className={`${styles['Heading']} ${styles[`Heading--size-${size}`]} ${styles[`Heading--color-${color}`]} ${
                styles[`Heading--mb-${mb}`]
            }`}
        >
            {children}
        </CustomTag>
    )
}

export default Heading
