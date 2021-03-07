import Heading from '../../ui/Heading/Heading'
import Collapsible from '../../components/Collapsible/Collapsible'
import styles from './FAQ.module.scss'

const FAQ = () => (
    <section className="bg-color-lightest lg-py-7">
        <div className={`${styles['FAQ']} mx-auto py-8 px-4`}>
            <div className="text-centered mb-8">
                <Heading variant="h3" size="2">
                    Frequently asked questions
                </Heading>
            </div>
            <Collapsible title="Why should you use a password manager for business?" expanded={true}>
                <p className={`${styles['FAQ__text']} pb-4 mr-10`}>
                    Running a business comes with managing a lot of different devices and accounts. The easiest way to
                    keep track of their login credentials is to use a password manager.
                </p>
                <p className={`${styles['FAQ__text']} pb-6 mr-10`}>
                    With a password manager, your employees can store all their logins in one place, share them with
                    coworkers, and access them on multiple devices with one password only. No excuse for forgetting
                    passwords after a long vacation or for sharing passwords via email!
                </p>
            </Collapsible>
            <Collapsible title="How to choose the best password manager for business?">
                <p className={`${styles['FAQ__text']} pb-4 mr-10`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi consectetur, odit
                    eveniet delectus atque repudiandae amet iste nulla vitae?
                </p>
                <p className={`${styles['FAQ__text']} pb-6 mr-10`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nihil!
                </p>
            </Collapsible>
            <Collapsible title="How can I get a business password manager?">
                <p className={`${styles['FAQ__text']} pb-6 mr-10`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium ipsam alias minima
                    commodi. Ex ratione nostrum provident quasi nesciunt dolor amet magni rem architecto laboriosam,
                    debitis aperiam odio laborum!
                </p>
            </Collapsible>
        </div>
    </section>
)

export default FAQ
