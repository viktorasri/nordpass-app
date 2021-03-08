import Heading from '../../ui/Heading/Heading'
import Button from '../../ui/Button/Button'
import styles from './Hero.module.scss'

const Hero = () => (
    <section className={`${styles['Hero']} color__bg--light lg__py--7`}>
        <div className={`${styles['Hero__innerWrapper']} mx--auto py--8 px--4`}>
            <div className="text--centered mb--7 lg__mb--0 lg__text--left lg__mr--5">
                <div className="color--black mb--7 lg__mt--9">
                    <Heading variant="h2" size="1">
                        Get your passwords organized
                    </Heading>
                </div>
                <Button variant="link" size="1" color="primary">
                    Get started
                </Button>
            </div>
            <div className="lg__ml--5">
                <img className={styles['Hero__image']} src="/images/np-hero-image.png" alt="Laptop and phone" />
            </div>
        </div>
    </section>
)

export default Hero
