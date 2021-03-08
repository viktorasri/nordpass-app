import Heading from '../../ui/Heading/Heading'
import ContactForm from '../ContactForm/ContactForm'
import styles from './GetNordPassForm.module.scss'

const GetNordPassForm = () => (
    <section className="color__bg--light py--8 px--4">
        <div className={`${styles['GetNordPassForm']} text--centered mx--auto lg__py--7`}>
            <div className="color--darkGrey mb--9">
                <Heading variant="h2" size="1">
                    Get NordPass for business
                </Heading>
            </div>
            <div className={`${styles['GetNordPassForm__innerWrapper']}`}>
                <div className={`${styles['GetNordPassForm__imageWrapper']} mb--7 lg__mb--0 lg__mr--7`}>
                    <img className={styles['GetNordPassForm__image']} src="/images/np-form-image.png" alt="Laptop" />
                </div>
                <div className="lg__ml--7">
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>
)

export default GetNordPassForm
