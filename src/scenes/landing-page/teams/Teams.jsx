import { Carousel } from 'react-bootstrap';
import './Teams.scss';
import '../../../App.scss';
import t1 from '../../../images/team1.JPG'
import t2 from '../../../images/team2.jpg'
import t3 from '../../../images/team3.jpg'
import t4 from '../../../images/team4.jpg'

const Teams = () => {

    return (
        <section className="container team" id="team">

            <h3 className="title">Team</h3>
            <h5 className="sub-title">Who We Are</h5>
            <Carousel className="slideTeam" variant="dark">
                <Carousel.Item className="teamContent" interval={100000}>
                    <div className="teamImg">
                        <img className="w-100" src={t2} alt="First slide"/>
                    </div>
                    <div className="teamData">
                        <Carousel.Caption >
                            <h3 className="text-dark">Abanoub Ragaay</h3>
                            <p className="team-job-title">Frontend Developer</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item className="teamContent" interval={100000}> 
                    <div className="teamImg">
                        <img className="w-100" src={t3} alt="Second slide"/>
                    </div>
                    <div className="teamData">
                        <Carousel.Caption >
                            <h3 className="text-dark">Gehad Samy</h3>
                            <p className="team-job-title ">Frontend Developer</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item className="teamContent" interval={100000}> 
                    <div className="teamImg">
                        <img className="w-100" src={t4} alt="Third slide"/>
                    </div>
                    <div className="teamData">
                        <Carousel.Caption >
                            <h3 className="text-dark">Mohanad Alaa</h3>
                            <p className="team-job-title ">Frontend Developer</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item className="teamContent" interval={100000}> 
                    <div className="teamImg">
                        <img className="w-100" src={t1} alt="Fourth slide"/>
                    </div>
                    <div className="teamData">
                        <Carousel.Caption >
                            <h3 className="text-dark">Doha Tammam</h3>
                            <p className="team-job-title ">Frontend Developer</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

            </Carousel>
        </section>
    )
}
export {Teams};