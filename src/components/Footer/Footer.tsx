import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer = () => (
    <footer className={`${styles['Footer']} mx-auto`}>
        <div className={`${styles[`Footer__innerWrapper`]} px-4 my-8 lg-my-9`}>
            <div className="size-6 textWeight-semibold">
                <div className={`${styles['Footer__title']} color-grey mb-4`}>Engage</div>
                <Link to="/" className={`${styles['Footer__link']} mb-3`}>
                    Privacy Pilicy
                </Link>
                <Link to="/" className={styles['Footer__link']}>
                    Terms of Service
                </Link>
            </div>
            <div className={`${styles['Footer__copyright']} textWeight-semibold size-7`}>
                Copyright © 2020 NordPass.com
            </div>
        </div>
    </footer>
)

export default Footer
