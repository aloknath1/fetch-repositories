import React from 'react';
import { Link } from 'react-router';

class Repository extends React.Component {
    constructor(props) {
        super(props);
		this.state = { repositories: [] };
	}

    componentDidMount() {
        let endpoint = 'https://api.github.com/users/aloknath1/repos';
       
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {               
               this.setState({ repositories: data });
            });
    } 

    render() {
        let repos = this.state.repositories;
        return (
            <div className="repos-page">                
				<div className="back">
                     <Link to={'/'}>Back</Link>
                </div>
                <h2>Repositories - ({repos.length})</h2>
                <table>
                    <thead>
                    <tr>                        
                        <th>Repo Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                { repos.map( ( item) => (
                    <tr id={item.id}>
                        <td>{ item.name }</td>
                        <td><a href={item.clone_url} target="_blank">Download</a></td>
                    </tr>
                )) }
                    </tbody>
                </table>
            </div>
        );
    }
};
export default Repository;