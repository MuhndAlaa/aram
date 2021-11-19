import './Home.scss'
import '../../../App.css'
import ReactPlayer from 'react-player';
import video from '../../../video/HomeVideo.mp4'
import { PricingSwitch } from '../PricingSwitch/PricingSwitch';
import { Teams } from '../teams/Teams';
import { CountUpComp } from '../count-up/CountUpComp';
import { Footer } from '../footer/Footer';
import Features from '../Features/Features';
import {Devises} from '../Devices/Devises';



const Home = () => {
    return (
        <>
            <section>
                <div className="container">
                    <header className="header row">
                        <div class="cu-main-section-header__wrapper-inner col-6">
                            <h1 class="cu-main-section-header__title">
                                One app to <br /> replace them all.
                            </h1>
                            <p class="cu-main-section-header__subtitle text-primary fw-bold fs-6">
                                All of your work in one place: Tasks, Docs, Chat, Goals, &amp; more.
                            </p>
                            <div class="cu-em-get-started">
                                <input class="banner__input" data-input-landing-page="" placeholder="Enter your email address" type="email"></input>
                              
                                <button class="btn btn_v2 btn-round" data-ga-click-tracking="" data-submit-landing-page="" ga-category="" ga-event="landingpage_lead main click" ga-label="" ga-value="" lp-plan="" mail-label="">
                                    <div class="btn__text">
                                        Get Started
                                    </div>
                                </button>
                            </div>
                           
                        </div>
                        <div className='player-wrapper col-6'>
                            <ReactPlayer
                                playing={true}
                                muted
                                loop
                                className='react-player'
                                url={video}
                                width='80%'
                                height='80%'
                            />
                        </div>
                    </header>
                </div>
            </section>
            <section>
                <CountUpComp />
            </section>
            <section>
                <Teams></Teams>
            </section>
            <section>
                <PricingSwitch />
            </section>
            <Devises></Devises>
         
            <Features></Features>

            <section>
                <Footer></Footer>
            </section>
        </>
    )
}

export { Home }


