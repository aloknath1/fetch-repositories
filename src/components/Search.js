import React from 'react';
import { useHistory } from "react-router-dom";

function Search() { 
    let history = useHistory();  
    const _handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/user/${this.refs.userInput.value}`)
    }	
  
    return (
        <div className="search-page">
            <h2>Enter a GitHub username</h2>
            <form method="post" onSubmit={_handleSubmit}>
                <input ref="userInput" className="search-page__input" type="text" />
                <button className="search-page__button">Search</button>
            </form>				
        </div>
    );    
};
export default Search;