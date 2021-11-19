import { BsLinkedin, BsTwitter} from 'react-icons/bs'
import { ImFacebook2} from 'react-icons/im'
import './Footer.scss';
import AOS from 'aos';
import counting from './counting.png';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { MDBInput, MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';


// ..
AOS.init();
// style={{ background: `url(${counting})`,
  
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat'
         
//          }}>
<link id="avast_os_ext_custom_font" href="chrome-extension://eofcbnmajmjmplflapaojjnihcjkigck/common/ui/fonts/fonts.css" rel="stylesheet" type="text/css"></link> 
export function Footer() {
	return (
		<footer  
			data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" className="footer" role="contentinfo">
			<div className="">
				<div class="primary wrap cf">
					<div class="footer-widgets row">
						<div id="" class="widget_text widget col-3">
							<h4 class="widgettitle">We Offer</h4>
							<div class="textwidget custom-html-widget">
								<ul>
									<li>Project Management Software</li>
									<li>Gantt Chart Makers</li>
									<li>Project Dashboards</li>
									<li>Task Management Software</li>
									<li>Planning Tools</li>
									<li>Project Management Tools</li>
								</ul>
							</div>
						</div>
						<div id="" class="widget_text widget col-3">
							<h4 class="widgettitle">Templates</h4>
							<div class="textwidget custom-html-widget">
								<ul>
									<li>Project Plan Template</li>
									<li>Gantt Chart Template</li>
									<li>Project Proposal</li>
									<li>WBS Template</li>
									<li>Project Budget</li>
									<li>All Templates</li>
								</ul>
							</div>
						</div>
						<div id="" class="widget_text widget col-6">
						<MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' label='Email address' />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn>Subscribe</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

 
						</div>
					</div>
				</div>
				<div class="ancillary wrap cf">
					<div>
						<p class="source-org copyright">© 2021
							<span>ProjectManager.com, Inc.</span></p>
						<div itemScope="" class="organization-contact-info">
							<span class="hide">ProjectManager.com</span>
							<div class="organization-address" itemScope="">
								<span>3721 Executive Center Dr., Suite 200</span>,
								<span>Austin</span>,
								<span>TX</span>
								<span>78731</span>
							</div>
							<div class="organization-contact">
								<span class="item"><span>&nbsp; &nbsp; &nbsp; 1 (800) 765-2495</span></span>
								<span class="item"><a href="/terms">Terms</a></span>
								<span class="item"><a href="/privacy">Privacy</a></span>
								<span class="item"><a href="/sitemap_index.xml">Site Map</a></span>
								<span class="footer-mobile-break"></span>
								<span class ="icon">
									<ImFacebook2 className="fs-4 text-primary mx-2"/>
								</span>
								<span class ="icon">
									<BsLinkedin className="fs-4 text-muted mx-2"/>
								</span>
								<span class ="icon">
									<BsTwitter className="fs-4 text-info mx-2"/>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}