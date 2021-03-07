import Heading from '../../ui/Heading/Heading'
import Button from '../../ui/Button/Button'
import styles from './Hero.module.scss'

const Hero = () => (
    <section className="bg-color-light lg-py-7">
        <div className={`${styles['Hero']} mx-auto py-8 px-4`}>
            <div className="mb-7 text-centered lg-text-left">
                <div className="color-black mb-7">
                    <Heading variant="h2" size="1">
                        Get your passwords organized
                    </Heading>
                </div>
                <Button variant="link" size="1" color="primary">
                    Get started
                </Button>
            </div>
            <div>
                <img className={styles['Hero__image']} src="/images/np-hero-image.png" alt="Laptop and phone" />
            </div>
        </div>
    </section>
)

export default Hero
