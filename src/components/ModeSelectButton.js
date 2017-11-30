import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

import '../styles/css/ModeSelectButton.css';


export default class ModeSelectButton extends React.Component {
	render() {
		return (
			<div className="ModeSelectButton">
				<ButtonGroup>
						<Button
							name="read"
							color="warning" outline 
							active={this.props.mode === 'read'}
							onClick={this.props.selectMode}>
								READ
						</Button>
						<Button 
							name="edit"
							color="warning" outline 
							active={this.props.mode === 'edit'}
							onClick={this.props.selectMode}>
								EDIT
						</Button>
						<Button 
							name="dual"
							color="warning" outline 
							active={this.props.mode === 'dual'}
							onClick={this.props.selectMode}>
								DUAL
						</Button>
				</ButtonGroup>
			</div>
		);
	}
}
