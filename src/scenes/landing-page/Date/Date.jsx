import { Link } from 'react-router-dom';
import './Date.scss';

export function DateNow(){
    const date = new Date()
    const datetoday = date.toLocaleDateString('en-US')
    return(
        <div className="section-date-wrapper" id="date">
            <section className="date">
                <h4>Today is {datetoday} <span>Hurry Up!</span> Sign in Now!</h4>
                <Link className="btn-date" to="/get-started">Get Started</Link>
            </section>
        </div>
    )
}