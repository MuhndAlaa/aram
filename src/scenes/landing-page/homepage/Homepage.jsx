import { PricingSwitch } from '../PricingSwitch/PricingSwitch';
import { Teams } from '../teams/Teams';
import { CountUpComp } from '../count-up/CountUpComp';
import { Footer } from '../footer/Footer';
import {Devises} from '../Devices/Devises';
import { Header } from '../header/Header';
import {Navigation} from '../navbar/Navigation';
import Features from '../Features/Features';

export default function Homepage() {
    return (
        <>
            <Navigation/>
            <Header/>
            <CountUpComp/>
            <Features/>
            <Teams/>
            <PricingSwitch/>
            <Devises/>
            <Footer/>
        </>
    )
}