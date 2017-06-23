import React, { Component } from 'react';

class Search extends Component {

	constructor(props){
		super(props);
		this.state = {
			term: props.defaultSearch,
			topic:'',
			yearEnd:'',
			yearStart:''
		};
	}

	render(){
		return(
		<div>
		<h1>Search Articles</h1>
		<form>
			Topic: 
			<input 
			value = {this.state.topic}
			onChange={(event) => this.onInputChange1(event.target.value)} />
			
			<br/>
			Year End: 
			<input 
			value = {this.state.yearEnd}
			onChange={(event) => this.onInputChange2(event.target.value)} />
			<br/>
			Year Start: 
			<input 
			value = {this.state.yearStart 		}
			onChange={(event) => this.onInputChange3(event.target.value)} />
		</form>

		<button onClick={()=>{this.props.callback(this.state) }}> Search Now! </button>
		</div>
		)	
	}

	onInputChange1(topic){
		this.setState({topic});
		

	}
	onInputChange2(yearEnd){
		 this.setState({yearEnd});
		

	}
	onInputChange3(yearStart){
		 this.setState({yearStart});
		

	}

	onClickLog(){
		console.log(this.state);
	}
}



export default Search;