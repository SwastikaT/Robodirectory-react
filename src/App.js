import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css'

class App extends Component{
	constructor(){
		super()
		this.state={
			robots: [],
			searchfield:''
		}
	}

	onSearchChange=(event)=>{
		this.setState({searchfield: event.target.value});
		
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(
			response=>{return response.json();}
			)
		.then(
			users=>{this.setState({robots: users});}
			);
	}
	render(){
		const filteredRobots= this.state.robots.filter(robot=>{return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())});
		return(
		<div className='tc'>
			<h1 id="robo">ROBOFRIENDS</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</div>
		);
	};
}

export default App;