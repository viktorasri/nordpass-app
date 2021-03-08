import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../ui/Input/Input'
import TextArea from '../../ui/TextArea/TextArea'
import ErrorMessage from '../../ui/ErrorMessage/ErrorMessage'
import Button from '../../ui/Button/Button'
import styles from './ContactForm.module.scss'
import { validateFormEmail, validateFormName } from '../../utils'

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
                <Input name="name" placeholder="Name" handleOnChange={handleOnChange} isError={errors.name} />
                {errors.name && (
                    <div className="mt--3">
                        <ErrorMessage>Name field cannot be empty</ErrorMessage>
                    </div>
                )}
            </div>
            <div className="mb--6">
                <Input name="email" placeholder="Email" handleOnChange={handleOnChange} isError={errors.email} />
                {errors.email && (
                    <div className="mt--3">
                        <ErrorMessage>Email address cannot be empty</ErrorMessage>
                    </div>
                )}
            </div>
            <div className="mb--6">
                <TextArea name="note" placeholder="Note" rows={7} noResize={true} handleOnChange={handleOnChange} />
                <p className="color--secondaryBlack textSize--6 mt--4">
                    This information will be used by NordPass to respond to your inquiry as provided in our{' '}
                    <Link className={styles['ContactForm__link']} to="/">
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
            <div className="mb--6">
                <Button variant="button" size="1" color="primary" handleOnClick={validateForm}>
                    Get started
                </Button>
            </div>
        </form>
    )
}

export default ContactForm
