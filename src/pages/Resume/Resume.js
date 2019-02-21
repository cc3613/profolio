import React, {Component} from 'react';

import './Resume.css';


class Resume extends Component {
	render () {
		return (
			<div>
				<div className="full-name">
					ChiaKang (Jonathan) Chao
				</div>
				<div className='personal-info'>
					<p>Long Island City, NY 11101</p>
					<p>jonathan.ck.chao@gmail.com</p>
				</div>
				<hr></hr>
				<div className="section">
					<h2 className="section-title">Experience</h2>
					<p>
						<p className="company">7Park Data Inc.</p>
						<p className="job-title">Software Engineer(June, 2018 – Present, New York, NY)</p>
						<ul className="functions">
							<li>Creating REST API endpoints for delivering and processing data using Django rest framework</li>
							<li>Creating UI for publishing data through Reactjs</li>
							<li>Integrating authentication services to applications to ensure protected access</li>
							<li>Creating Database for user permissions to store each individual user’s permissions level and services to check permissions</li>
							<li>Generating and maintaining scheduled tasks using Apache Airflow for data manipulation</li>
							<li>ETL for data stored in Redshift, etc. on AWS</li>
						</ul>
					</p>
					<p>
						<p className="company">Bitglass Inc.</p>
						<p className="job-title">Software Engineer (Nov, 2015 – May, 2018, Campbell, CA)</p>
						<ul className="functions">
							<li>Logging user activities, applying different analysis through Python such as file download/upload, login/logout, and policy changes. Logs are stored using MongoDB and Elasticsearch. Log integrity is ensured (format, mapping, etc.)</li>
							<li>User activities are further analyzed to check against policies stored in MySQL. Alerts are implemented to inform admins about anomaly of user behaviors 
								(such as logging in from an unfamiliar location) or violation of a policy (such as data leak prevention). Email system is also implemented for admins to receive alert emails. Jobs are done in Python utilizing RabbitMQ, MongoDB, and Elasticsearch</li>
							<li>Utilizing different API’s to parse info for log completion. Some examples are Office 365, Google Drives, and Dropbox</li>
							<li>Designing and upgrading infrastructure to improve performance and scalability</li>
							<li>Constantly developing new features and maintaining existing systems</li>
						</ul>
					</p>
					<p>
						<p className="company">NeuroSky Inc.</p>
						<p className="job-title">Software Engineer Intern (June, 2014 – August, 2014, San Jose, CA)</p>
						<ul className="functions">
							<li>Designed software for new sensor material testing. All programs will be used for future testing</li>
							<li>Conducted experiments using signal analyzer, function generator, and various equipments to test feasibility of new materials. 
								Found potential material to be the new sensor for next generation products</li>
						</ul>
					</p>
					<p>
						<p className="company">Nanya Technology Corp. USA</p>
						<p className="job-title">Application Engineer (Jan, 2011 – Dec, 2012, Santa Clara, CA)</p>
						<ul className="functions">
							<li>Planned steps for product engagement for qualification of products by providing description of each step and target dates 
								through phone call and slides, resulting in successful product launch and qualifications</li>
							<li>Demonstrated continuous improvement of the products to OEM to show engineering capability through complete failure 
								analysis reports and long-term improvement plan, which ensured the products’ quality and reliability</li>
							<li>Engaged with analysis procedure change and fabrication plant processes modification to avoid confusion 
								from both backend and field application engineers. The procedures eventually became new SOP.</li>
						</ul>
					</p>
				</div>
				<hr></hr>
				<div className="section">
					<h2 className="section-title">Projects</h2>
					<p>
						<p className="company">Identifying Animals in Wild (Machine Learning)</p>
						<ul className="functions">
							<li>Cascade Object Detector, Bag of Words, and SIFT to identifying different animals in a wild database</li>
							<li>Achieved 74.12% accuracy with such algorithm, a very positive result for a wild database</li>
						</ul>
					</p>
					<p>
						<p className="company">Medical Report Classification (Web Scraping + Machine Learning)</p>
						<ul className="functions">
							<li>Python based project using Naïve Bayes algorithm</li>
							<li>Numpy, scikit-learn, and Beautifulsoup4 libraries to scrape information off a medical website then classify</li>
						</ul>
					</p>
					<p>
						<p className="company">Hand-written Digit Recognition (Machine Learning)</p>
						<ul className="functions">
							<li>Neural network with one hidden layer, 100 (+1 bias) neurons</li>
							<li>Achieved 95% accuracy with 50000 training samples and 10000 testing samples</li>
						</ul>
					</p>
					<p>
						<p className="company">And, of course, this website</p>
					</p>
				</div>
				<hr></hr>
				<div className="section">
					<h2 className="section-title">Skills</h2>
					<p>
						<p className="company">Applications</p>
						<ul className="functions">
							<li>MongoDB, Elasticsearch, AWS (EC2, ECS, Cloudfront, RDS, S3, Lambda, Kinesis), MySQL, RabbitMQ, Django, git, docker</li>
						</ul>
					</p>
					<p>
						<p className="company">Programming Languages</p>
						<ul className="functions">
							<li>Python (Python 2 & 3), SQL, Shell/Bash, javascript (Reactjs)</li>
						</ul>
					</p>
				</div>
				<hr></hr>
				<div className="section">
					<h2 className="section-title">Education</h2>
					<p>
						<p className="company">Columbia University, the Fu Foundation School of Engineering and Applied Science</p>
						<p className="job-title">M.S. Electrical Enginnering (June, 2015)</p>
					</p>
					<p>
						<p className="company">University of California, San Diego</p>
						<p className="job-title">B.S. Electrical Enginnering (June, 2010)</p>
					</p>
				</div>

			</div>
		);
	}
}

export default Resume;