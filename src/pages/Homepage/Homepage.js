import React, {Component} from 'react';

import Logo from '../../Components/Logo/Logo';
import MediumLogo from '../../Components/Logo/MediumLogo';
import GithubLogo from '../../Components/Logo/GithubLogo';
import RPGLogo from '../../Components/Logo/RPGLogo';

import './Homepage.css';



class Homepage extends Component {
	render () {
		return (
			<div className='homepage'>
				<Logo className="homepage-logo"/>
				<div className="header-text">
					<h1>Jonathan Chao's Page</h1>
					<h3 className='title-paragraph'>I'm a software engineer who specializes in full stack development. I specialize in building APIs and integrating servers with frontend components. You can find some of my works in github.</h3>
					<h3>This website currently is only suited for desktop and tablet view.</h3>
				</div>
				<br />

				<div className='content-paragraph'>
					<MediumLogo className="in-paragraph-logo mediumlogo"/>
					<p className="paragraph">
						You can visit the Medium page. It contains some tricks I've learned over the years.
						Sometimes you can find some work experience posts. It's not all technical.
					</p>
				</div>

				<div className='content-paragraph even'>
					<p className="paragraph">
						You can visit the Github page. It contains my projects I did in the past.
					</p>
					<GithubLogo className="in-paragraph-logo githublogo"/>
				</div>

				<div className='content-paragraph'>
					<RPGLogo className="in-paragraph-logo rpglogo"/>
					<p className="paragraph">
						You can try out the text based role playing game where you can explore the dungeon and kill monsters. You will need to create an account to play. This website uses Firebase as backend for data retrieval and authentication. <spam className='highlight'>(Under construction)</spam>
					</p>
				</div>
				<br className='breakline'/>
			</div>
		);
	}
}

export default Homepage;