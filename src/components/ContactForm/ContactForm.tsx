import { Link } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import styles from './ContactForm.module.scss'

const ContactForm = () => {
    return (
        <form className={`${styles['ContactForm']} text-left mx-auto`} onSubmit={(e) => e.preventDefault()}>
            <p className="mb-4">Fill out your details, and we will get back to you shortly:</p>
            <div className="mb-6">
                <input
                    className={`${styles['ContactForm__input']} pt-3 pb-2 pl-4 size-5`}
                    placeholder="Name"
                    required={true}
                    type="text"
                ></input>
            </div>
            <div className="mb-6">
                <input
                    className={`${styles['ContactForm__input']} pt-3 pb-2 pl-4 size-5`}
                    placeholder="Email"
                    required={true}
                    type="email"
                ></input>
            </div>
            <div className="mb-6">
                <textarea
                    className={`${styles['ContactForm__textarea']} pt-3 pb-2 pl-4 mb-4 size-5`}
                    placeholder="Note"
                    rows={7}
                ></textarea>
                <p className="color-secondaryBlack size-6 mb-6">
                    This information will be used by NordPass to respond to your inquiry as provided in our{' '}
                    <Link className={styles['ContactForm__link']} to="/">
                        Privacy Policy
                    </Link>
                    .
                </p>
                <Button variant="button" size="1" color="primary">
                    Get started
                </Button>
            </div>
        </form>
    )
}

export default ContactForm
