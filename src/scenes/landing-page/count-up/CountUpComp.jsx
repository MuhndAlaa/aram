import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './counter.scss';

const CountUpComp = ()=>{
    const [loading, setLoading] = useState(false);
    const onStart = () => {setLoading(true)};
    const onEnd = () => {setLoading(false)};
    const containerProps = {
      'aria-busy': loading
    };


//     style={{ background: `url(${counting})`,
  
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat'
         
//          }}
    return(
   
         <section class="mt-5 counter" >
         
        <div class="row m-0 justify-content-evenly text-center text-light text-uppercase">
            <div class="col"></div>
            <div class="col-sm-2 col-12 border-sm-0 border-bottom ">
                <div class="number fw-bold pt-5"> <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
            <div style={{ height: 100 }}>
                {isVisible ? <CountUp end={100} duration="3" onStart={onStart} onEnd={onEnd} containerProps={containerProps} /> : null}
            </div>
            )}
        </VisibilitySensor></div>
                <div class="text pb-5">Web Design Projects</div>
            </div>
            <div class="col-sm-2 col-12 border-sm-0 border-bottom  ">
                <div class="number fw-bold pt-5"> <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
            <div style={{ height: 100 }}>
                {isVisible ? <CountUp end={100} duration="4" onStart={onStart} onEnd={onEnd} containerProps={containerProps} /> : null}
            </div>
            )}
        </VisibilitySensor></div>
                <div class="text pb-5">happy client</div>
            </div>
            <div class="col-sm-2 col-12 border-sm-0 border-bottom ">
                <div class="number fw-bold pt-5"> <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
            <div style={{ height: 100 }}>
                {isVisible ? <CountUp end={100} duration="3" onStart={onStart} onEnd={onEnd} containerProps={containerProps} /> : null}
            </div>
            )}
        </VisibilitySensor></div>
                <div class="text pb-5">award winner</div>
            </div>
            <div class="col-sm-2 col-12 border-sm-0 border-bottom ">
                <div class="number fw-bold pt-5"> <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
            <div style={{ height: 100 }}>
                {isVisible ? <CountUp end={100} duration="5" onStart={onStart} onEnd={onEnd} containerProps={containerProps} /> : null}
            </div>
            )}
        </VisibilitySensor></div>
                <div class="text pb-5">cup of coffee</div>
            </div>
       
            <div class="col"></div>
        </div>
    </section>
       
    
    )
}

export {CountUpComp}