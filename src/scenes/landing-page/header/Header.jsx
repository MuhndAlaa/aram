import './Header.scss';
import '../../../App.scss';
import ReactPlayer from 'react-player';
import video from '../../../video/HomeVideo.mp4';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <>
            <header id="header">
                <div className="container">
                    <header className="header row align-items-center">
                        <div className="header__content col-6">
                            <h1 className="cu-main-section-header__title">
                                One app to <br /> replace them all.
                            </h1>
                            <p className="cu-main-section-header__subtitle text-primary fw-bold fs-6">
                                All of your work in one place: Tasks, Docs, Chat, Goals, &amp; more.
                            </p>
                            <div className="cu-em-get-started">
                                <input className="banner__input" data-input-landing-page="" placeholder="Enter your email address" type="email"></input>
                                <button className="btn btn_v2 btn-round" data-ga-click-tracking="" data-submit-landing-page="" ga-category="" ga-event="landingpage_lead main click" ga-label="" ga-value="" lp-plan="" mail-label="">
                                    <Link className="btn__text" to="/views">
                                        Get Started
                                    </Link>
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
                                height='100%'
                            />
                        </div>
                    </header>
                </div>
            </header>

        </>
    )
}

export { Header }


