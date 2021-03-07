import { FunctionComponent } from 'react'
import FAQ from '../../components/FAQ/FAQ'
import Hero from '../../components/Hero/Hero'
import LeakedPasswords from '../../components/LeakedPasswords/LeakedPasswords'
import GetNordPassForm from '../../components/GetNordPassForm/GetNordPassForm'

const Home: FunctionComponent = () => (
    <>
        <Hero />
        <LeakedPasswords />
        <FAQ />
        <GetNordPassForm />
    </>
)

export default Home
