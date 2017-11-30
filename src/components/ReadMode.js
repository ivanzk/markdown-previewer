import React from 'react';
import { Row, Col } from 'reactstrap';

import '../styles/css/ReadMode.css';
import MarkedText from './MarkedText';


export default class ReadMode extends React.Component {
	render() {
		return (
			<Row className="ReadMode my-1 my-lg-3 justify-content-center">
				<Col lg="10" xl="8">
					<MarkedText markedText={this.props.markedText} />
				</Col>
			</Row>
		);
	}
}
