import React from 'react';
import { Row, Col } from 'reactstrap';

import '../styles/css/ContentView.css';
import ReadMode from './ReadMode';
import EditMode from './EditMode';
import DualMode from './DualMode';


export default class ContentView extends React.Component {
	render() {
		switch(this.props.mode) {
			case 'read': 
				return (
					<Row className="ContentView">
						<Col>
							<ReadMode 
								markedText={this.props.markedText} 
							/>
						</Col>
					</Row>
				);
			
			case 'edit': 
				return (
					<Row className="ContentView">
						<Col>
							<EditMode 
								textareaValue={this.props.textareaValue}
								textareaChange={this.props.textareaChange}
							/>
						</Col>
					</Row>
				);
			
			case 'dual':
				return (
					<Row className="ContentView">
						<Col>
							<DualMode 
								textareaValue={this.props.textareaValue}
								textareaChange={this.props.textareaChange}
								markedText={this.props.markedText} 
							/>
						</Col>
					</Row>
				);
				
			default:
				return null;
		}
	}
}
