import React from 'react';

import '../styles/css/FileReader.css';


export default class FileReader extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleChange = this.handleChange.bind(this);
	}
	
	
	handleChange(e) {
		this.props.loadFile(e);
		this.props.toggle();
	}
	
	
	render() {
		return (
			<div className="FileReader">
				<label htmlFor="fileInput">{this.props.label}</label>
				<input 
					id="fileInput"
					type="file" 
					accept=".txt, .md" 
					onChange={this.handleChange} 
				/>
			</div>
		);
	}
}