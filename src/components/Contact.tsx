/* eslint-disable jsx-a11y/anchor-is-valid */
export const Contact = () => {
	return (
		<div id='contact'>
			<div id='contact-section-content'>
				<h2 className='section-header'>Contact</h2>
				<a
					href='mailto:jen.shivel@vibrant-learning.online'
					className='contact-content-link'
				>
					Email
				</a>
				<a
					href='https://www.linkedin.com/in/jen-shivel/'
					target='_blank'
					rel='noopener noreferrer'
					className='contact-content-link'
				>
					LinkedIn
				</a>
				<a
					href='https://www.xing.com/profile/Jennifer_Shivel/cv'
					target='_blank'
					rel='noopener noreferrer'
					className='contact-content-link'
				>
					Xing
				</a>
				<a
					href='files/Shivel_CV_Eng_2023.pdf'
					download='Shivel_CV_Eng_2023'
					className='contact-content-link'
				>
					Download CV (Eng)
				</a>
				<a
					href='files/Shivel_CV_Deu_2023.pdf'
					download='Shivel_CV_Deu_2023'
					className='contact-content-link'
				>
					Download CV (Deu)
				</a>
				{/* <a href='#' className='contact-content-link'>
					Impressum
				</a> */}
			</div>
		</div>
	);
};

export default Contact;
