import React from 'react';
import { Row, Col } from 'reactstrap';

import '../styles/css/DualMode.css';
import TextArea from './TextArea';
import MarkedText from './MarkedText';


export default class DualMode extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			style: {minHeight: 400}
		}
		
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
		let editmodeStyle = window.getComputedStyle(document.querySelector('.DualMode'));

		let navbarStyle = window.getComputedStyle(document.querySelector('.HeaderView'));

		let navbarCollapseStyle = window.getComputedStyle(document.querySelector('.navbar-collapse'));

		let navbarCollapseHeight = parseInt(navbarCollapseStyle.height, 10);
		if (!navbarCollapseHeight || navbarCollapseHeight < 50)
			navbarCollapseHeight = 0;

		if (window.innerWidth < 992) {
			this.setState({
				style:  {
					height: (window.innerHeight - parseInt(navbarStyle.height, 10) + navbarCollapseHeight - 8 - parseInt(editmodeStyle.marginTop, 10) * 2) / 2
				}
			});
		} else {
			this.setState({
				style:  {
					height: (window.innerHeight - parseInt(navbarStyle.height, 10) + navbarCollapseHeight - parseInt(editmodeStyle.marginTop, 10) * 2)
				}
			});
		}
	}
	
	
	render() {
		return (
			<Row className="DualMode my-1 my-lg-3">
				<Col 
					xs="12" lg="6" className="mb-2 mb-lg-0"
					style={this.state.style} 
				>
					<TextArea 
						textareaValue={this.props.textareaValue}
						textareaChange={this.props.textareaChange} 
					/>
				</Col>
				<Col xs="12" lg="6">
					<MarkedText 
						style={this.state.style} 
						markedText={this.props.markedText} 
					/>
				</Col>
			</Row>
		);
	}
}
