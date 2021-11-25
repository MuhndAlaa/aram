import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./features.scss";
import one from '../../../images/one.jpg';
import two from '../../../images/two.jpg';
import three from '../../../images/three.jpg';
import ReactPlayer from 'react-player';
import video1 from '../../../video/dashbarod1.mp4'
import video2 from '../../../video/dashbarod2.mp4'


gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current.offsetWidth
      }
    });
  }, []);

  return (
    <div>
      <div className="features__container" ref={panelsContainer}>
        <div
          className="description panel"
          ref={(e) => createPanelsRefs(e, 0)}
        >
        
          <div className='player-wrapper col-6'>
                            <ReactPlayer
                                playing={true}
                                muted
                                loop
                                className='react-player'
                                url={video1}
                                width='120%'
                                height='100%'
                            />
                        </div>
            <div className="scroll-down">
              Scroll down<div className="arrow"></div>
            </div>
       
        </div>
        <section className="panel" ref={(e) => createPanelsRefs(e, 1)} style={{ background: `url(${one})`,
  
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
         
         }}>
          <figure>

                        {/* <img className="w-100" src={one} alt="Second slide"/> */}
              
          </figure>
        </section>
        <section className="panel " ref={(e) => createPanelsRefs(e, 2)} style={{ background: `url(${two})`,
  
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
         
         }}>
          TWO
        </section>
        <section className="panel three" ref={(e) => createPanelsRefs(e, 3)} style={{ background: `url(${three})`,
  
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
         
         }}>
           <div className="container">
           THREE
           </div>
          
        </section>
        <section className="panel" ref={(e) => createPanelsRefs(e, 4)}>
        <div className='player-wrapper col-6'>
                            <ReactPlayer
                                playing={true}
                                muted
                                loop
                                className='react-player'
                                url={video2}
                                width='150%'
                                height='100%'
                             
                            />
                        </div>        
                        
                        
                        </section>
     
      </div>
    </div>
  );
}
