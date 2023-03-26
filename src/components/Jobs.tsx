/* eslint-disable jsx-a11y/anchor-is-valid */
// import Efile from '../resources/michael-aleo-jUrku7MmrNY-unsplash.jpg';
import Folders from '../resources/andrew-pons-6-RhsUzKO6g-unsplash.jpg';
import Workshop from '../resources/ux-indonesia-1V5zGGTYXVc-unsplash.jpg';
import Webinar from '../resources/austin-distel-VCFxt2yT1eQ-unsplash.jpg';
import Students from '../resources/people-g115067e13_1920.jpg';
import Office from '../resources/sigmund-Fa9b57hffnM-unsplash.jpg';
import Books from '../resources/kimberly-farmer-lUaaKCUANVI-unsplash.jpg';

export const Jobs = () => {
	return (
		<div id='jobs'>
			<h2 className='section-header'>Job Experience</h2>
			<p className='para-text text-align-center cv-link'>
				<em>
					Hover or tap images for details, or download my
					<a href='#contact'> full CV</a>.
				</em>
			</p>
			<div className='projects-content-container'>
				<div className='project-container'>
					<div className='project-container-image'>
						<img src={Folders} alt='E-File' id='efile-project' />
					</div>
					<div className='project-container-text'>
						<h3 className='icon-caption'>
							Freelance Software Instructor
						</h3>
						{/* <h5 className='icon-caption'>April 2022 - present</h5> */}
						<p className='para-text'>
							I currently work as an online trainer for the VIS
							Smart-Client, an e-file software being rolled out in
							governmental agencies in Lower Saxony, Germany.
						</p>
						<div className='project-links-container'>
							<a
								href='https://www.mi.niedersachsen.de/startseite/aktuelles/presseinformationen/einfuhrung-der-eakte-in-der-landesverwaltung-inzwischen-uber-10-000-nutzerinnen-und-nutzer-215205.html'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								More Info
							</a>
						</div>
					</div>
				</div>
				<div className='project-container'>
					<div className='project-container-image'>
						<img src={Workshop} alt='Workshop' id='workshop' />
					</div>
					<div className='project-container-text'>
						<h3 className='icon-caption'>Learning Consultant</h3>
						<p className='para-text'>
							At tts, I developed corporate learning strategies,
							planned and conducted design workshops, and created
							learning content.
						</p>
						<div className='project-links-container'>
							<a
								href='https://www.tt-s.com/de/learning-architects'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								Company
							</a>
							<a
								href='files/Shivel_tts_reference.pdf'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								Reference
							</a>
						</div>
					</div>
				</div>
				<div className='project-container'>
					<div className='project-container-image'>
						<img src={Webinar} alt='Webinar' id='Webinar' />
					</div>
					<div className='project-container-text'>
						<h3 className='icon-caption'>
							E-Learning Student Assistant
						</h3>
						<p className='para-text'>
							During my time at Quadriga University, I organized
							and ran live webinars, updated and monitored the
							learning management system, and managed the CRM.
						</p>
						<div className='project-links-container'>
							<a
								href='https://www.quadriga-hochschule.com/weiterbildung/e-learnings/'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								Company
							</a>
							<a
								href='files/Shivel_Quadriga_reference.pdf'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								Reference
							</a>
						</div>
					</div>
				</div>
				<div className='project-container'>
					<div className='project-container-image'>
						<img src={Students} alt='Students' id='students' />
					</div>
					<div className='project-container-text'>
						<h3 className='icon-caption'>
							Volunteer English Instructor
						</h3>
						<p className='para-text'>
							At BTBTM, I prepared and delivered supplementary
							English language instruction for grade 10 students.
						</p>
						<div className='project-links-container'>
							<a
								href='https://www.tgd.de/2011/06/01/turkisches-wissenschafts-und-technologiezentrum-btbtm-2/'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								Organization
							</a>
						</div>
					</div>
				</div>
				<div className='project-container'>
					<div className='project-container-image'>
						<img src={Office} alt='office' id='office' />
					</div>
					<div className='project-container-text'>
						<h3 className='icon-caption'>
							Student Assistant for HR and Graduate Programmes
						</h3>
						<p className='para-text'>
							At the Hertie School of Governance, I administrated
							web-based program catalogs, advised study abroad
							students, and managed student records.
						</p>
						<div className='project-links-container'>
							<a
								href='https://www.hertie-school.org/en/'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								Company
							</a>
							<a
								href='files/Shivel_Hertie_references.pdf'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								References
							</a>
						</div>
					</div>
				</div>
				<div className='project-container'>
					<div className='project-container-image'>
						<img src={Books} alt='books' id='books' />
					</div>
					<div className='project-container-text'>
						<h3 className='icon-caption'>Teacher's Aide</h3>
						<p className='para-text'>
							While working at McKinley Technology High School, I
							planned and delivered targeted lessons for students
							diagnosed with Asperger’s Syndrome.
						</p>
						<div className='project-links-container'>
							<a
								href='https://mckinleytech.org/'
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								School Site
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Jobs;
