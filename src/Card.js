import React from 'react';
import './Card.css';

const Card= (props)=>{
	const {name, email} =props;
	return(
		<div className=' tc  dib pa3 ma5 grow bw2 shadow-5 cole'>
		<img src={`https://robohash.org/${props.id}?200x200`} alt='robots' />
		<div>
		<a href="https://www.google.com">{name}</a>
		<p>{email}</p>
		<form>
			<input type="text" placeholder="Behaviour" className='tc br-pill dib pa3 ma2 grow chrome' />
			<br />
			<input type="radio" value="male" name="gender" className='ma2' />Male
			<input type="radio" value="female" name="gender" className='ma2' />Female
			<input type="radio" value="others" name="gender" className='ma2' />Others
			<br />
			Birth Date
			<input type="date" className='br-12 ma2 br-pill chrome' />
			<br />
			<button type="submit" className='br-pill ma3 chrome'>SUBMIT</button>
		</form>
		</div>
		</div>
		);
}

export default Card;