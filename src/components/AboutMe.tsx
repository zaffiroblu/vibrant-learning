/* eslint-disable jsx-a11y/anchor-is-valid */
import JenBnW from '../resources/Jen_BnW_cropped.jpg';

export const AboutMe = () => {
	return (
		<>
			<div id='about-me'>
				<div className='about-me-img'>
					<img src={JenBnW} alt='Jen Shivel' />
				</div>
				<div className='about-me-content'>
					<h2 className='section-header'>About me</h2>
					<p className='para-text'>
						I craft interactive, fun, and relatable learning
						experiences that{' '}
						<a
							href='https://katielmartin.com/2017/10/07/10-characteristics-of-learner-centered-experiences'
							target='_blank'
							rel='noopener noreferrer'
						>
							{' '}
							center around the learner
						</a>{' '}
						and their needs.
						<br />
						<br />
						Whether teaching a live course, creating a web-based
						training or producing a screencast, I utilize
						contextualized
						<a
							href='https://www.skillgym.com/2019/03/why-use-interactive-storytelling-in-training-benefits-of-role-plays/'
							target='_blank'
							rel='noopener noreferrer'
						>
							{' '}
							storytelling
						</a>{' '}
						to draw participants into the action. In the spirit of
						<a
							href='https://cognota.com/blog/how-to-develop-an-iterative-learning-design-process/'
							target='_blank'
							rel='noopener noreferrer'
						>
							{' '}
							iterative design,
						</a>{' '}
						learner feedback is harnessed to improve my future
						trainings, which means I am never done growing and
						evolving on the job.
						<br />
						<br />I hold a Master of Education and am fluent in both
						English and German. In my free time, I am currently
						learning{' '}
						<a
							href='https://www.freecodecamp.org/news/front-end-developer-what-is-front-end-development-explained-in-plain-english/'
							target='_blank'
							rel='noopener noreferrer'
						>
							{' '}
							frontend development
						</a>{' '}
						and can code simple, responsive web applications.
						<br />
						<br />I am looking for a new position that lets me use
						my wide range of abilities to create value for learners
						and for the company every day.
					</p>
				</div>
			</div>
		</>
	);
};

export default AboutMe;
