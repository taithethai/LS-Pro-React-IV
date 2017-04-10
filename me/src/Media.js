import React, {Component} from 'react';
import Selfie from './selfie.jpg';

export default class Media extends Component {
	render() {
		return(
			<div className="Media">
				<img src={Selfie} alt="Me!"/>
			</div>);
	}
}