import React from 'react';

import '../styles/css/TextArea.css';


export default class TextArea extends React.Component {
	render() {
		return (
			<div className="TextArea">
				<textarea className="p-2 p-sm-3 p-md-4 p-xl-5"
					aria-label="textarea"
					value={this.props.textareaValue}
					onChange={this.props.textareaChange}>
				</textarea>
			</div>
		);
	}
}
