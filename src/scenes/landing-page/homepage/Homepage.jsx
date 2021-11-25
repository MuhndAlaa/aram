import { PricingSwitch } from '../PricingSwitch/PricingSwitch';
import { Teams } from '../teams/Teams';
import { CountUpComp } from '../count-up/CountUpComp';
import { Footer } from '../footer/Footer';
import {Devises} from '../Devices/Devises';
import { Header } from '../header/Header';
import {Navigation} from '../navbar/Navigation';

export default function Homepage() {
    return (
        <>
            <Navigation/>
            <Header/>
            <CountUpComp/>
            <Teams/>
            <PricingSwitch/>
            <Devises/>
            <Footer/>
        </>
    )
}