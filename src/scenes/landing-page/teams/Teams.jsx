import { Carousel } from 'react-bootstrap';
import './Teams.scss';
import '../../../App.css';
import t1 from '../../../images/team1.JPG'
import t2 from '../../../images/team2.jpg'
import t3 from '../../../images/team3.jpg'
import t4 from '../../../images/team4.jpg'

const Teams = () => {

    return (
        <>
        <div className="container">

            <h3 className="title mb-5">Teams</h3>
            <Carousel className="slideTeam" variant="dark">
                <Carousel.Item className="teamContent" interval={1500}>
                    <div className="teamImg">
                        <img className="w-100" src={t2} alt="First slide"/>
                    </div>

                    <div className="teamData">
                        <Carousel.Caption >
                            <h3 className="text-dark">Abanoub Ragaay</h3>
                            <p className="text-danger fw-bold fs-6">Frontend Developer</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item className="teamContent" interval={1500}> 
                    <div className="teamImg">
                        <img className="w-100" src={t3} alt="Second slide"/>
                    </div>

                    <div className="teamData">
                        <Carousel.Caption >
                            <h3 className="text-dark">Gehad Samy</h3>
                            <p className="text-danger fw-bold">Frontend Developer</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item className="teamContent" interval={1500}> 
                    <div className="teamImg">
                        <img className="w-100" src={t4} alt="Third slide"/>
                    </div>

                    <div className="teamData">
                        <Carousel.Caption >
                            <h3 className="text-dark">Mohanad Alaa</h3>
                            <p className="text-danger fw-bold">Frontend Developer</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item className="teamContent" interval={1500}> 
                    <div className="teamImg">
                        <img className="w-100" src={t1} alt="Fourth slide"/>
                    </div>

                    <div className="teamData">
                        <Carousel.Caption >
                            <h3 className="text-dark">Doha Tammam</h3>
                            <p className="text-danger fw-bold">Frontend Developer</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
        </>
    )
}
export {Teams};