import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { BsCodeSlash } from "react-icons/bs";
import { BiCoffee, BiTimeFive } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import './counter.scss';

const CountUpComp = () => {
    const [loading, setLoading] = useState(false);
    const onStart = () => { setLoading(true) };
    const onEnd = () => { setLoading(false) };
    const containerProps = {
        'aria-busy': loading
    };

    return (

        <div className="section-counter-wrapper" id="counter">
            <section className="counter" >
                <div className="row m-0 justify-content-evenly text-center text-light text-uppercase">
                    <div className="col-lg-3 col-md-6 col-sm-6 border-sm-0 border-bottom ">
                        <div className="number fw-bold pt-5">
                            <BsCodeSlash />
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 50 }}>
                                        {isVisible ? <CountUp end={5000} duration="1" onStart={onStart} onEnd={onEnd} containerProps={containerProps} /> : null}
                                    </div>
                                )}
                            </VisibilitySensor></div>
                        <div className="text pb-5">Lines of Code</div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 border-sm-0 border-bottom  ">
                        <div className="number fw-bold pt-5">
                            <HiOutlineUserGroup />
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 50 }}>
                                        {isVisible ? <CountUp end={50} duration="0.5" onStart={onStart} onEnd={onEnd} containerProps={containerProps} /> : null}
                                    </div>
                                )}
                            </VisibilitySensor></div>
                        <div className="text pb-5">Meetings</div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 border-sm-0 border-bottom ">
                        <div className="number fw-bold pt-5">
                            <BiTimeFive />
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 50 }}>
                                        {isVisible ? <CountUp end={300} duration="3" onStart={onStart} onEnd={onEnd} containerProps={containerProps} /> : null}
                                    </div>
                                )}
                            </VisibilitySensor></div>
                        <div className="text pb-5">Total hours</div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 border-sm-0 border-bottom ">
                        <div className="number fw-bold pt-5">
                            <BiCoffee />
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 50 }}>
                                        {isVisible ? <CountUp end={100} duration="2" onStart={onStart} onEnd={onEnd} containerProps={containerProps} /> : null}
                                    </div>
                                )}
                            </VisibilitySensor></div>
                        <div className="text pb-5">cup of coffee</div>
                    </div>
                </div>
            </section>
        </div>


    )
}

export { CountUpComp }