import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./features.scss";
import one from "../../../images/one.jpg";
import three from "../../../images/three.jpg";
import five from "../../../images/five.jpg";


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
        end: () => "+=" + panelsContainer?.current?.offsetWidth,
      },
    });
  }, []);

  return (
    <div>
      <div className="features__container" ref={panelsContainer}>
        <section
          className="panel"
          ref={(e) => createPanelsRefs(e, 1)}
          style={{
            background: `url(${one})`,

            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
        </section>
        <section className="panel" ref={(e) => createPanelsRefs(e, 2)}  style={{
            background: `url(${five})`,

            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}>
         
        </section>
        <section className="panel" ref={(e) => createPanelsRefs(e, 3)}  style={{
            background: `url(${three})`,

            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}>
         
        </section>
      </div>
    </div>
  );
}
