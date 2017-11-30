import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import '../styles/css/DocumentButton.css';
import FileReader from './FileReader';
import FileNameInput from './FileNameInput';


export default class DocumentButton extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			dropdownOpen: false
		};
		
		this.toggle = this.toggle.bind(this);
	}
	
	
	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}
	
	
	render() {
		return (
			<div className="DocumentButton">
				<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
					<DropdownToggle color="warning" outline caret area-label="Document">
						DOCUMENT
					</DropdownToggle>
					<DropdownMenu>
						<FileNameInput 
							fileName={this.props.fileName}
							setFileName={this.props.setFileName} />
						<DropdownItem divider />
						<DropdownItem onClick={this.props.newDocument}>
							NEW
						</DropdownItem>
						<FileReader 
							label="OPEN"
							toggle={this.toggle}
							loadFile={this.props.loadFile} 
						/>
						<DropdownItem onClick={this.props.saveFile}>
							SAVE
						</DropdownItem>
						<DropdownItem onClick={this.props.resetSession}>
							RESET
						</DropdownItem>
						<DropdownItem divider />
						<DropdownItem onClick={this.props.loadExample}>
							Example
						</DropdownItem>
					</DropdownMenu>
				</ButtonDropdown>
			</div>
		);
	}
}
