import React from 'react';

import '../styles/css/FileNameInput.css'


export default class FileNameInput extends React.Component {
	render() {
		return (
			<div className="FileNameInput">
				<input
					type="text"
					value={this.props.fileName}
					onChange={this.props.setFileName} 
				/>
			</div>
		);
	}
}
