import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import Icon from '../../ui/Icon/Icon'
import styles from './ContactForm.module.scss'
import { validateFormEmail, validateFormName } from '../../helpers'

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', note: '' } as { [key: string]: string })
    const [errors, setErrors] = useState(
        {} as {
            [key: string]: boolean
        }
    )

    const handleOnChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value }: { name: string; value: string } = event.target as HTMLInputElement | HTMLTextAreaElement
        const newFormData = { ...formData }
        newFormData[name] = value
        setFormData(newFormData)
    }

    const validateForm = () => {
        const newErrors = { ...errors }
        newErrors.name = !validateFormName(formData.name)
        newErrors.email = !validateFormEmail(formData.email)

        setErrors(newErrors)
    }

    return (
        <form className={`${styles['ContactForm']} text--left mx--auto`} onSubmit={(e) => e.preventDefault()}>
            <p className="mb--4">Fill out your details, and we will get back to you shortly:</p>
            <div className="mb--6">
                <input
                    className={`${styles['ContactForm__input']} ${
                        errors.name && styles['ContactForm__input--error']
                    } color--darkGrey pt--3 pb--2 pl--4 size--5`}
                    placeholder="Name"
                    name="name"
                    onChange={handleOnChange}
                ></input>
                {errors.name && (
                    <div className="color--red textWeight--semibold size--6 mt--3">
                        <Icon variant="warning" />{' '}
                        <span className={`${styles['ContactForm__errorText']} ml--1`}>Name field cannot be empty</span>
                    </div>
                )}
            </div>
            <div className="mb--6">
                <input
                    className={`${styles['ContactForm__input']} ${
                        errors.email && styles['ContactForm__input--error']
                    } color--darkGrey pt--3 pb--2 pl--4 size--5`}
                    placeholder="Email"
                    name="email"
                    onChange={handleOnChange}
                ></input>
                {errors.email && (
                    <div className="color--red textWeight--semibold size--6 mt--3">
                        <Icon variant="warning" />{' '}
                        <span className={`${styles['ContactForm__errorText']} ml--1`}>
                            Email address cannot be empty
                        </span>
                    </div>
                )}
            </div>
            <div className="mb--6">
                <textarea
                    className={`${styles['ContactForm__textarea']} color--darkGrey pt--3 pb--2 pl--4 mb--4 size--5`}
                    placeholder="Note"
                    rows={7}
                    onChange={handleOnChange}
                    name="note"
                ></textarea>
                <p className="color--secondaryBlack size--6 mb--6">
                    This information will be used by NordPass to respond to your inquiry as provided in our{' '}
                    <Link className={styles['ContactForm__link']} to="/">
                        Privacy Policy
                    </Link>
                    .
                </p>
                <Button variant="button" size="1" color="primary" handleOnClick={validateForm}>
                    Get started
                </Button>
            </div>
        </form>
    )
}

export default ContactForm
