import './Footer.scss';

export function Footer() {
	return (
		<footer className="footer" id="contact"  data-aos="fade-up"
		data-aos-offset="200"
		data-aos-delay="50"
		data-aos-duration="1000"
		data-aos-easing="ease-in-out"
		data-aos-mirror="true"
		data-aos-once="false"
		data-aos-anchor-placement="top-center"
	>
			<div className="container">
				<div className="row">
					<div className="footer-offer col-lg-4 col-md-6 col-sm-12">
						<h4>We Offer</h4>
						<ul>
							<li>Project Management Software</li>
							<li>Project Dashboards</li>
							<li>Planning Tools</li>
							<li>Multi Views For Project</li>
							<li>Complete Access Through Roles</li>
						</ul>
					</div>
					<div className="footer-template col-lg-4 col-md-6 col-sm-12">
						<h4>Templates</h4>
						<ul>
							<li>Project Plan Template</li>
							<li>MindMap Chart Template</li>
							<li>Drag and Drop Template</li>
							<li>List Chart Template</li>
							<li>Multi Methodlogy</li>
						</ul>
					</div>
					<div className="footer-form col-lg-4 col-md-6 col-sm-12">
						<h4>Contact US</h4>
						<input type="text" className="form-control w-75" placeholder="Email Address..."/>
						<textarea placeholder="Your Message..." rows="3" className="w-75 form-control"></textarea>
						<button className="btn btn-primary btn-footer-form">Send</button>
					</div>
				</div>
			</div>
			<p  className="footer__copyright">Copyright ©2021 Aram Team.</p>
		</footer>
	)
}