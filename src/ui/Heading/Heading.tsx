import { FunctionComponent } from 'react'
import styles from './Heading.module.scss'

interface IProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    size?: '1' | '2' | '3' | '4' | '5' | '6'
    color?: 'black' | 'darkGrey'
    mb?: '1' | '2' | '3'
}

const Heading: FunctionComponent<IProps> = ({ children, variant, size = '1', color, mb }) => {
    const HeadingTag = variant as keyof JSX.IntrinsicElements

    return (
        <HeadingTag
            className={`${styles['Heading']} ${styles[`Heading--size-${size}`]} ${styles[`Heading--color-${color}`]} ${
                styles[`Heading--mb-${mb}`]
            }`}
        >
            {children}
        </HeadingTag>
    )
}

export default Heading
