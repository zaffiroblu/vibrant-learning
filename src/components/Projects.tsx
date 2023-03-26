/* eslint-disable jsx-a11y/anchor-is-valid */
import folders from '../resources/folders.svg';
import direction from '../resources/direction.svg';
import chemistry from '../resources/chemistry.svg';
import LnDCards from '../resources/LnDCards.svg';
import workerComputer from '../resources/worker-computer.svg';
import academicGlobe from '../resources/academicGlobe.svg';
import car from '../resources/car.svg';
import computerSettings from '../resources/computer-settings.svg';

export const SelectedProjects = () => {
	return (
		<div id='projects'>
			<h2 className='section-header'>Selected Projects</h2>
			<p className='para-text text-align-center cv-link'>
				<em>
					Hover or tap images for details, or download my
					<a href='#contact'> full CV</a>.
				</em>
			</p>
			<div className='projects-content-container'>
				{/* <div className='project-container-2'> */}
				{/* <div className='card-2'>
						<div className='slide slide1'>
							<div className='project-2-content'>
								<div className='project-2-icon'>
									<img
										className='project-container-image-2'
										src={folders}
										alt='folders'
										id='folders'
									/>
									<h3 className='icon-caption'>
										IT Training
									</h3>
									<p className='p2'>
										@Studieninstitut des Landes
										Niedersachsen (SiN)
									</p>
								</div>
							</div>
						</div>

						<div className='slide slide2'>
							<div className='project-2-content'>
								<p className='para-text'>
									Delivered over 600 hours of virtual training
									for an eFile software to more than 500
									participants from various public ministries
									in the German state of Lower Saxony.
								</p>
							</div>
						</div>
					</div> */}
				{/* </div> */}
				<div className='project-container-2'>
					<div className='card-2'>
						<div className='slide slide1'>
							<div className='project-2-content'>
								<div className='project-2-icon'>
									<img
										className='project-container-image-2'
										src={workerComputer}
										alt='digital work icon'
										id='workerComputer'
									/>
									<h3 className='icon-caption'>
										Strategy Development
									</h3>
									<h3 className='p2'>@SiN</h3>
								</div>
							</div>
						</div>
						<div className='slide slide2'>
							<div className='project-2-content'>
								<p className='para-text'>
									Developed and deployed a blended learning
									plan for training instructors to use the
									virtual classroom software BigBlueButton.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='project-container-2'>
					<div className='card-2'>
						<div className='slide slide1'>
							<div className='project-2-content'>
								<div className='project-2-icon'>
									<img
										className='project-container-image-2'
										src={direction}
										alt='direction icon'
										id='direction'
									/>
									<h3 className='icon-caption'>
										Learning Unit Creation
									</h3>
									<p className='p2'>@Siemens</p>
								</div>
							</div>
						</div>
						<div className='slide slide2'>
							<div className='project-2-content'>
								<p className='para-text'>
									Created concepts and content for a
									company-wide learning platform on topics
									related to digital transformation and career
									development.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='project-container-2'>
					<div className='card-2'>
						<div className='slide slide1'>
							<div className='project-2-content'>
								<div className='project-2-icon'>
									<img
										className='project-container-image-2'
										src={chemistry}
										alt='chemistry icon'
										id='chemistry'
									/>
									<h3 className='icon-caption'>
										Screencast <br /> Production
									</h3>
									<h3 className='p2'>@BASF</h3>
								</div>
							</div>
						</div>
						<div className='slide slide2'>
							<div className='project-2-content'>
								<p className='para-text'>
									Produced and recorded a series of learning
									videos for the laboratory software package
									LabBooQ.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='project-container-2'>
					<div className='card-2'>
						<div className='slide slide1'>
							<div className='project-2-content'>
								<div className='project-2-icon'>
									<img
										className='project-container-image-2'
										src={computerSettings}
										alt='computer icon'
										id='computerSettings'
									/>
									<h3 className='icon-caption'>
										Web-Based Training Production
									</h3>
									<p className='p2'>
										@tts (internal project)
									</p>
								</div>
							</div>
						</div>
						<div className='slide slide2'>
							<div className='project-2-content'>
								<p className='para-text'>
									Planned and developed web-based trainings
									(WBTs) for MS Office applications with the
									company's own authoring tool (ttps).
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='project-container-2'>
					<div className='card-2'>
						<div className='slide slide1'>
							<div className='project-2-content'>
								<div className='project-2-icon'>
									<img
										className='project-container-image-2'
										src={car}
										alt='car icon'
										id='car'
									/>
									<h3 className='icon-caption'>
										Webinar Moderation
									</h3>
									<p className='p2'>@Mercedes-Benz</p>
								</div>
							</div>
						</div>
						<div className='slide slide2'>
							<div className='project-2-content'>
								<p className='para-text'>
									Planned and moderated an internal weekly
									webinar series highlighting the company’s
									latest digital products and services.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='project-container-2'>
					<div className='card-2'>
						<div className='slide slide1'>
							<div className='project-2-content'>
								<div className='project-2-icon'>
									<img
										className='project-container-image-2'
										src={LnDCards}
										alt='cards icon'
										id='LnDCards'
									/>
									<h3 className='icon-caption'>
										Research and Design
									</h3>
									<h3 className='p2'>
										@tts (internal project)
									</h3>
								</div>
							</div>
						</div>
						<div className='slide slide2'>
							<div className='project-2-content'>
								<p className='para-text'>
									Conducted industry research, held design
									workshops, and composed content to produce
									the tts{' '}
									<a
										href='https://www.tt-s.com/en/learning-architects/learning-design-cards'
										className='para-text'
										target='_blank'
										rel='noopener noreferrer'
									>
										Learning Design Cards
									</a>
									.
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* <div className='project-container-2'>
					<div className='card-2'>
						<div className='slide slide1'>
							<div className='project-2-content'>
								<div className='project-2-icon'>
									<img
										className='project-container-image-2'
										src={academicGlobe}
										alt='academic globe icon'
										id='academicGlobe'
									/>
									<h3 className='icon-caption'>
										Design Thinking
									</h3>
									<h3 className='p2'>
										@Stiftung der Deutschen Wirtschaft
									</h3>
								</div>
							</div>
						</div>
						<div className='slide slide2'>
							<div className='project-2-content'>
								<p className='para-text'>
									Together with my design thinking team, I
									created a concept for an extracurricular
									educational program that introduces
									technically unskilled teenagers to topics
									related to digitization.
								</p>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default SelectedProjects;
