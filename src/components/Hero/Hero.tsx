import Heading from '../../ui/Heading/Heading'
import Button from '../../ui/Button/Button'
import styles from './Hero.module.scss'

const Hero = () => (
    <section className={styles['Hero']}>
        <div className={styles['Hero__innerWrapper']}>
            <div className={styles['Hero__info']}>
                <Heading variant="h1" size="1" color="black" mb="1">
                    Get your passwords organized
                </Heading>
                <div className={styles['Hero__buttonWrapper']}>
                    <Button variant="link" size="1" color="primary">
                        Get started
                    </Button>
                </div>
            </div>
            <div className={styles['Hero__imageWrapper']}>
                <img className={styles['Hero__image']} src="/images/np-hero-image.png" alt="Laptop and phone" />
            </div>
        </div>
    </section>
)

export default Hero
