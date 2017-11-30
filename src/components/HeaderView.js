import React from 'react';
import { Row, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import FontAwesome from 'react-fontawesome';

import '../styles/css/HeaderView.css';
import ModeSelectButton from './ModeSelectButton';
import DocumentButton from './DocumentButton';


export default class HeaderView extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isOpen: false
		}
		this.toggle = this.toggle.bind(this);
	}
	
	toggle() {
		this.setState({isOpen: !this.state.isOpen})
	}
	
	render() {
		return (
			<Row className="HeaderView fixed-top px-3 px-lg-5 py-md-2">
				<Navbar dark expand="md">
					<NavbarBrand href="./">Markdown Previewer</NavbarBrand>
					<NavbarToggler onClick={this.toggle} aria-label="NavbarToggler" />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav>
							<NavItem>
								<div className="ml-lg-2">
									<NavLink href="https://github.com/ivanzk/markdown-previewer">
											<FontAwesome name="github" size="2x" />
									</NavLink>
								</div>
							</NavItem>
						</Nav>
						<Nav className="ml-auto mt-4 mt-md-0" navbar>
							<NavItem>
								<ModeSelectButton 
									selectMode={this.props.selectMode}
									mode={this.props.mode} />
							</NavItem>
							<NavItem>
								<div className="m-2 m-md-0 ml-md-2 ml-lg-4">
									<DocumentButton 
										fileName={this.props.fileName}
										setFileName={this.props.setFileName}
										newDocument={this.props.newDocument} 
										loadFile={this.props.loadFile} 
										saveFile={this.props.saveFile} 
										loadExample={this.props.loadExample}
										resetSession={this.props.resetSession}
									/>
								</div>
							</NavItem>
						</Nav>
					</Collapse>	
				</Navbar>
			</Row>
		);
	}
}
