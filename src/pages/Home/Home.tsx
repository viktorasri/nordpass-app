import { FunctionComponent } from 'react'
import Hero from '../../components/Hero/Hero'
import LeakedPasswords from '../../components/LeakedPasswords/LeakedPasswords'

const Home: FunctionComponent = () => (
    <>
        <Hero />
        <LeakedPasswords />
    </>
)

export default Home
