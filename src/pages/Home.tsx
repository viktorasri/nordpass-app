import { FunctionComponent } from 'react'
import FAQ from '../components/FAQ/FAQ'
import Hero from '../components/Hero/Hero'
import LeakedPasswordList from '../components/LeakedPasswordList/LeakedPasswordList'
import GetNordPassForm from '../components/GetNordPassForm/GetNordPassForm'

const Home: FunctionComponent = () => (
    <>
        <Hero />
        <LeakedPasswordList />
        <FAQ />
        <GetNordPassForm />
    </>
)

export default Home
