import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./features.scss";
import one from "../../../images/one.jpg";
import two from "../../../images/two.jpg";
import three from "../../../images/three.jpg";
import four from "../../../images/four.jpg";
import five from "../../../images/five.jpg";

import ReactPlayer from "react-player";
import video1 from "../../../video/dashbarod1.mp4";
// import video2 from "../../../video/dashbarod2.mp4";


export default function Features() {
  gsap.registerPlugin(ScrollTrigger);

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
        end: () => "+=" + panelsContainer?.current?.offsetWidth,
      },
    });
  }, []);

  return (
    <div>
      <div className="features__container" ref={panelsContainer}>
        <div className="description panel" ref={(e) => createPanelsRefs(e, 0)}>
          <div className="player-wrapper col-lg-7 col-md-8">
            <ReactPlayer
              playing={true}
              muted
              loop
              className="react-player"
              url={video1}
              width="100%"
              height="100%"
            />
          </div>
          <div className="scroll-down">
            Scroll down<div className="arrow"></div>
          </div>
        </div>
        <section
          className="panel"
          ref={(e) => createPanelsRefs(e, 1)}
          style={{
            background: `url(${one})`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <figure>
            {/* <img className="w-100" src={one} alt="Second slide"/> */}
          </figure>
        </section>
        <section
          className="panel "
          ref={(e) => createPanelsRefs(e, 2)}
          style={{
            background: `url(${two})`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          TWO
        </section>
        <section className="panel" ref={(e) => createPanelsRefs(e, 3)}  style={{
            background: `url(${five})`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
         
        </section>
        <section className="panel" ref={(e) => createPanelsRefs(e, 4)}  style={{
            background: `url(${four})`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
         
        </section>
        <section className="panel" ref={(e) => createPanelsRefs(e, 5)}  style={{
            background: `url(${three})`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
         
        </section>
      </div>
    </div>
  );
}
