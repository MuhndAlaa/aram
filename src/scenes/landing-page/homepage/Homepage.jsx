import { PricingSwitch } from '../PricingSwitch/PricingSwitch';
import { Teams } from '../teams/Teams';
import { CountUpComp } from '../count-up/CountUpComp';
import { Footer } from '../footer/Footer';
import {Devises} from '../Devices/Devises';
import { Header } from '../header/Header';
import {Navigation} from '../navbar/Navigation';
import {DateNow} from '../Date/Date';
import {Services} from '../services/Services';
import { FaArrowUp } from 'react-icons/fa';
import "./Homepage.scss";
import FeaturesMobile from '../FeaturesMobile/FeaturesMobile';

export default function Homepage() {
    return (
        <div className="homepage">
            <Navigation/>
            <Header/>
            <CountUpComp/>
            <Services/>
            <Devises/>
            <FeaturesMobile/>
            <DateNow/>
            <Teams/>
            <PricingSwitch/>
            <Footer/>
            <a href="#header" className="btn-scrollup"><FaArrowUp/></a>
        </div>
    )
}