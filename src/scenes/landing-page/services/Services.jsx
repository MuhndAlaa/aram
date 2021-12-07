import { RiMindMap } from 'react-icons/ri';
import { MdLeaderboard } from 'react-icons/md';
import { GiDatabase } from 'react-icons/gi';
import { FaUserEdit } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';
import { RiAlarmWarningFill } from 'react-icons/ri';
import "./Services.scss";
export function Services() {

    const services = [
        {
            icon: <RiMindMap/>,
            title: "MindMap",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, consectetur!"
        },
        {
            icon: <MdLeaderboard/>,
            title: "Various Methodologies",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, consectetur!"
        },
        {
            icon: <GiDatabase/>,
            title: "Real Time DB",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, consectetur!"
        },
        {
            icon: <FaUserEdit/>,
            title: "Role Stricted",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, consectetur!"
        },
        {
            icon: <MdReviews/>,
            title: "Multi-Views Dashboard",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, consectetur!"
        },
        {
            icon: <RiAlarmWarningFill/>,
            title: "Live Notifications",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, consectetur!"
        }
    ]
    return (
        <section id="services" className="services">
            <div className="container">
                <h3 className="title">Services</h3>
                <h5 className="sub-title">What we do</h5>
                <div className="row">
                    {
                        services.map((service, index) =>(
                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                <div className="service">
                                    <div className="service__icon">{service.icon}</div>
                                    <h4 className="service__title">{service.title}</h4>
                                    <p className="service__content">{service.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}