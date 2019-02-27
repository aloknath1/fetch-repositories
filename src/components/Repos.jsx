import React from 'react';

class Repository extends React.Component {
    constructor(props) {
        super(props);
		this.state = { repositories: [] };
		console.log(props);
		
		let endpoint = 'https://api.github.com/users/aloknath1/repos';
       
        fetch(endpoint)
            .then(blob => blob.json())
            .then(response => {
                this.setState({ repositories: response.items });
            });
       
		
    }
 
    render() {
        return (
            <div className="repos-page">                
				<div className="foundRepo">{this.props.name}</div>
                <h2>Repositories</h2>
                <ul>
                { this.state.repositories.map( ( item, index ) => (
                    <li key={ index }>
                        { item.name }
                    </li>
                )) }
                </ul>
            </div>
        );
    }
};
export default Repository;