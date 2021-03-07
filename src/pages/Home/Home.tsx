import { FunctionComponent } from 'react'
import FAQ from '../../components/FAQ/FAQ'
import Hero from '../../components/Hero/Hero'
import LeakedPasswords from '../../components/LeakedPasswords/LeakedPasswords'
import NordPassBussiness from '../../components/NordPassBussiness/NordPassBussiness'

const Home: FunctionComponent = () => (
    <>
        <Hero />
        <LeakedPasswords />
        <FAQ />
        <NordPassBussiness />
    </>
)

export default Home
