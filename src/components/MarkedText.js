import React from 'react';

import '../styles/css/MarkedText.css'


export default class MarkedText extends React.Component {
	render() {
		return (
			<div className="MarkedText p-2 p-sm-3 p-md-4 p-xl-5" 
					style={this.props.style}>
				<div dangerouslySetInnerHTML={this.props.markedText}></div>
			</div>
		);
	}
}
