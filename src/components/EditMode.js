import React from 'react';
import { Row, Col } from 'reactstrap';

import '../styles/css/EditMode.css';
import TextArea from './TextArea';


export default class EditMode extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			style: {
				height: 400
			}
		};
		
		this.updateStyleHeight = this.updateStyleHeight.bind(this);
	}
	
	componentDidMount() {
		this.updateStyleHeight();
		window.addEventListener('resize', this.updateStyleHeight);
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateStyleHeight);
	}
	
	
	updateStyleHeight() {
		let editmodeStyle = window.getComputedStyle(document.querySelector('.EditMode'));
		
		let navbarStyle = window.getComputedStyle(document.querySelector('.HeaderView'));
		
		let navbarCollapseStyle = window.getComputedStyle(document.querySelector('.navbar-collapse'));
		
		let navbarCollapseHeight = parseInt(navbarCollapseStyle.height, 10);
		if (!navbarCollapseHeight || navbarCollapseHeight < 50)
			navbarCollapseHeight = 0;
		
		this.setState({
			style: {
				height: window.innerHeight - parseInt(navbarStyle.height, 10) + navbarCollapseHeight - parseInt(editmodeStyle.marginTop, 10) * 2
			}
		});
	}
	
	
	render() {
		return (
			<Row className="EditMode my-1 my-lg-3 justify-content-center"
				style={this.state.style}
			>
				<Col lg="10" xl="8">
					<TextArea 
							textareaValue={this.props.textareaValue}
							textareaChange={this.props.textareaChange} 
					/>
				</Col>
			</Row>
		);
	}
}
