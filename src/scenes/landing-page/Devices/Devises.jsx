import ReactPlayer from 'react-player';
import video from '../../../video/Devices.mp4'
import './Devises.scss';
// import 'aos/dist/aos.css';

const Devises = () => {
    return (
        <>
            <section className="devices" id="devices">
                <div className="container">
                    <h3 className="title">Devices</h3>
                    <h5 className="sub-title">What we Support</h5>
                    <div className="row justify-content-between align-items-center" >
                        <div className="Devises__title col-lg-6 col-md-12">
                            <h1 className="cu-main-section-header__title">
                                Manage your Project from anywhere.
                            </h1>
                            <p className="fs-6">
                                Create and access your to-do lists from anywhere: desktop, mobile phone, or browser tab. Now you'll never miss an idea or forget what you need to do next.
                            </p>

                        </div>
                        <div className='player-wrapper col-lg-6 col-md-12 float-end' data-aos="fade-left">
                            <ReactPlayer
                                playing={true}
                                muted
                                loop
                                className='react-player'
                                url={video}
                                width='100%'
                                height='90%'
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export { Devises }


