import React from 'react';
import "./contact.css"
import imagesecond from '../images/iv.jpg'
import Footer from './Footer'

const Contact = () => {
	return (
		<div>
			<div className="Background-image-contact">
			</div>
			<div className="headings">
				<h1>You can contact us anytime by Emailing us or by filling this form</h1>
			</div>
			<div className="Form-div">
				<div className="image">
					<img src={imagesecond} />
				</div>

				<div className="contact-form__main">
					<form id="contact-form" method="POST">
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input type="text" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input type="email" className="form-control" aria-describedby="emailHelp" />
						</div>
						<div className="form-group">
							<label htmlFor="message">Message</label>
							<textarea className="form-control" rows="5"></textarea>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>

			</div >
			<br/>
				<Footer/>
			<div className="CopyRight__contact">
				<h1>Copyright 2020.All rights reserved.</h1>
			</div>

		</div >
	);
};

export default Contact;
