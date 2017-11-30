import React, { Component } from 'react';
import { Container } from 'reactstrap';
import FileSaver from 'file-saver';
import marked from 'marked';
import example from '../example.md';

import '../styles/css/App.css';
import ContentView from './ContentView';
import HeaderView from './HeaderView';


marked.setOptions({
	breaks: true
});


class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			textareaValueInital: '## Markdown Previewer \n\n--- \n\n**Markdown** is a lightweight markup language with plain text formatting syntax. \n\n[Wikipedia: Markdown](https://en.wikipedia.org/wiki/Markdown) \n\n',
			textareaValue: '',
			markedText: {__html: ''},
			mode: 'dual',
			fileName: 'Markdown Previewer',
			fileExt: 'md'
		};
		
		this.textareaChange = this.textareaChange.bind(this);
		this.selectMode = this.selectMode.bind(this);
		this.newDocument = this.newDocument.bind(this);
		this.loadFile = this.loadFile.bind(this);
		this.saveFile = this.saveFile.bind(this);
		this.loadExample = this.loadExample.bind(this);
		this.setFileName = this.setFileName.bind(this);
		this.resetSession = this.resetSession.bind(this);
	}
	
	componentDidMount() {
		if (localStorage.textareaValue !== undefined) {
			this.setState(() => {
				return {
					textareaValue: localStorage.textareaValue,
					fileName: localStorage.fileName,
					mode: localStorage.mode
				};
			}, this.markdown);
		} else {
			localStorage.setItem('textareaValue', this.state.textareaValueInital);
			localStorage.setItem('fileName', this.state.fileName);
			localStorage.setItem('mode', this.state.mode);
			this.setState(() => {
				return {textareaValue: this.state.textareaValueInital};
			}, this.markdown);
		}
	}
	
	componentDidUpdate() {
		localStorage.fileName = this.state.fileName;
		localStorage.textareaValue = this.state.textareaValue;
		localStorage.setItem('mode', this.state.mode);
	}
	
	
	textareaChange(e) {
		let text = e.target.value;
		this.setState((state) => {
			return {textareaValue: text};
		}, this.markdown);
	}
	
	setFileName(e) {
		this.setState({fileName: e.target.value});
	}
	
	newDocument() {
		this.setState(() => {
			return {
				textareaValue: '', 
				fileName: 'Untitled Document',
				mode: 'dual'
			};
		}, this.markdown);
	}
	
	loadFile(e) {
		if (e.target.files[0] === undefined)
			return;
		
		let file = e.target.files[0];
		let reader = new FileReader();
		
		reader.readAsText(file);
		reader.onload = (e) => {
			this.setState((state) => {
				return {
					textareaValue: e.target.result,
					fileName: file.name.replace(/.md|.txt(?=)/g, '')
				};
			}, this.markdown);
		}
	}
	
	loadExample() {
		let reader = new FileReader();
		
		fetch(example).then((response) => response.blob())
		.then((data) => reader.readAsText(data));
		
		reader.onload = (e) => {
			this.setState(() => {
				return {textareaValue: e.target.result};
			}, this.markdown);
		}
		
		this.setState({
			fileName: 'Create React App',
			mode: 'dual'
		});
	}
	
	saveFile() {
		let blob = new Blob([this.state.textareaValue], 
								{type: 'text/x-markdown; charset=utf-8'});
		let fileName = `${this.state.fileName ? this.state.fileName : 
			'Untitled Document'}.${this.state.fileExt}`;
		FileSaver.saveAs(blob, fileName);
	}
	
	resetSession() {
		this.setState(() => {
			return {
				textareaValue: this.state.textareaValueInital, 
				fileName: 'Markdown Previewer',
				mode: 'dual'
			};
		}, this.markdown);
	}
	
	selectMode(e) {
		this.setState({mode: e.target.name});
	}
	
	markdown() {
		this.setState({markedText: {__html: marked(this.state.textareaValue)}});
	}
	
	
  render() {
    return (
      <Container fluid>
				<HeaderView 
					mode={this.state.mode}
					selectMode={this.selectMode} 
					fileName={this.state.fileName}
					setFileName={this.setFileName}
					newDocument={this.newDocument}
					loadFile={this.loadFile}
					saveFile={this.saveFile}
					loadExample={this.loadExample}
					resetSession={this.resetSession}
				/>
				<ContentView 
					mode={this.state.mode}
					textareaValue={this.state.textareaValue}
					textareaChange={this.textareaChange}
					markedText={this.state.markedText} 
				/>
			</Container>
    );
  }
}

export default App;
