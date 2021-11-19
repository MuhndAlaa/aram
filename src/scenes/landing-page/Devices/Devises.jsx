
import ReactPlayer from 'react-player';
import video from '../../../video/Devices.mp4'

import './Devises.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


// ..
AOS.init();
<link id="avast_os_ext_custom_font" href="chrome-extension://eofcbnmajmjmplflapaojjnihcjkigck/common/ui/fonts/fonts.css" rel="stylesheet" type="text/css"></link> 

const Devises = () => {
    return (
        <>
            <section>
                <div className="">
                    <div className="devices row"  data-aos="fade-up"
     data-aos-anchor-placement="top-center" data-aos-offset="200" data-aos-delay="100" data-aos-duration="10000" role="contentinfo">
                        <div class="Devises__title col-5">
                            <h1 class="cu-main-section-header__title">
                            Manage your Project from anywhere.
                            </h1>
                            <p class="fw-bold fs-6">
                            Create and access your to-do lists from anywhere: desktop, mobile phone, or browser tab. Now you'll never miss an idea or forget what you need to do next.
                            </p>
                    
                        </div>
                        <div className='player-wrapper col-6' data-aos="fade-left">
                            <ReactPlayer
                                playing={true}
                                muted
                                loop
                                className='react-player'
                                url={video}
                                width='90%'
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


