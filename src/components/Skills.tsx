import HTMLicon from '../resources/HTML5.svg';
import CSSicon from '../resources/CSS3.svg';
import JavaScriptIcon from '../resources/JavaScript.svg';
import ReactIcon from '../resources/react.svg';
import BootstrapIcon from '../resources/bootstrap.svg';
import GitIcon from '../resources/git.svg';
import GitHubIcon from '../resources/github.svg';
import npmIcon from '../resources/npm.svg';
import FigmaIcon from '../resources/figma.svg';
import AdobeXDIcon from '../resources/adobexd.svg';
import BBBIcon from '../resources/bigbluebutton.svg';
import WebExIcon from '../resources/webex.svg';
import GoToIcon from '../resources/goto.svg';
import AdobeConnectIcon from '../resources/adobeconnect.svg';
import MoodleIcon from '../resources/moodle.svg';
import CamtasiaIcon from '../resources/camtasia.svg';
import TrelloIcon from '../resources/trello.svg';
import ttpsIcon from '../resources/ttps.svg';
import OfficeIcon from '../resources/msoffice.svg';
import VsCodeIcon from '../resources/vscode.svg';
import LDSkills from './LDSkills';

const Skills = () => {
	return (
		<div id='skills'>
			<h2 className='section-header'>Skills</h2>
			<LDSkills />
			<h2 className='section-header'>Tools and Technologies</h2>
			<p className='para-text text-align-center'>
				<em>Hover or tap icons for titles.</em>
			</p>
			<div id='skills-container-1'>
				<div id='skills-column-1'>
					<div className='section-subheader'>
						Learning &amp; Development
					</div>
					<div id='skills-languages-frameworks'>
						<div className='skills-icon-container'>
							<img
								src={BBBIcon}
								alt='BBB icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>
								BigBlueButton
							</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={WebExIcon}
								alt='webex icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>WebEx</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={GoToIcon}
								alt='GoToicon'
								className='icon'
							/>
							<div className='overlay icon-caption'>
								GoTo Webinar
							</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={AdobeConnectIcon}
								alt='AdobeConnect icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>
								Adobe Connect
							</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={MoodleIcon}
								alt='moodle icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>Moodle</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={CamtasiaIcon}
								alt='camtasia icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>Camtasia</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={ttpsIcon}
								alt='ttps icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>TTPS</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={AdobeXDIcon}
								alt='AdobeXD icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>Adobe XD</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={TrelloIcon}
								alt='trello icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>Trello</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={OfficeIcon}
								alt='office icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>
								MS Office
							</div>
						</div>
					</div>
				</div>
				<div id='skills-column-2'>
					<div className='section-subheader'>Web Development</div>
					<div id='skills-development-tools'>
						<div className='skills-icon-container'>
							<img
								src={HTMLicon}
								alt='HTML icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>HTML5</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={CSSicon}
								alt='CSS icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>CSS3</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={JavaScriptIcon}
								alt='JavaScript icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>
								JavaScript
							</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={BootstrapIcon}
								alt='Bootstrap icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>
								Bootstrap
							</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={ReactIcon}
								alt='React icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>React</div>
						</div>

						<div className='skills-icon-container'>
							<img
								src={VsCodeIcon}
								alt='AdobeXD icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>VS Code</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={GitIcon}
								alt='Git icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>git</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={GitHubIcon}
								alt='GitHub icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>GitHub</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={npmIcon}
								alt='npm icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>npm</div>
						</div>
						<div className='skills-icon-container'>
							<img
								src={FigmaIcon}
								alt='Figma icon'
								className='icon'
							/>
							<div className='overlay icon-caption'>Figma</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
