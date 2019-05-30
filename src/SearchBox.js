import React from 'react';
import './Card.css'

const SearchBox=({searchfield, searchChange})=>{
	return(
		<div className='pa3' >
			<input 
			className='tc pa3 ba b--green chrome br-pill'
			type='search' 
			placeholder='SEARCH ROBOTS'
			onChange= {searchChange} 
			/>
		</div>

		);
}

export default SearchBox;