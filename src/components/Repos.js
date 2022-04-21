import React, {useState, useEffect} from 'react';
import { Link } from 'react-router';

function Repository() {
    const [repositories , setRepositories] = useState([]);
    const getData = () => {
        let endpoint = 'https://api.github.com/users/aloknath1/repos';       
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {    
                //console.log(data);
                setRepositories(data);
            });
    } 

    const formatDateTime = (datetime) => {
        var date = new Date(datetime);   
        var n = date.toDateString();
        var time = date.toLocaleTimeString();
        return n + ',' + time;
    }  

    useEffect(() => {
        getData();  
    }, []);

        return (
            <div className="repos-page">                
				<div className="back">
                     <Link to={'/'}>Back</Link>
                </div>
                <h2>Repositories - ({repositories.length})</h2>
                <table border="1" width="100%" cellPadding="2" cellSpacing="2">
                    <thead>
                    <tr>
                        <th>SNo</th>                        
                        <th>Repo Name</th>
                        <th>Visibility</th>
                        <th>Created</th>
                        <th>Pushed</th>                        
                    </tr>
                    </thead>
                    <tbody>
                { repositories && repositories.map(( item, index) => (
                    <tr id={item.id} key={item.id}>
                        <td align="center">{ index+1 }</td>
                        <td><a href={item.clone_url} target="_blank">{ item.name }</a></td>
                        <td align="center">{ item.visibility }</td>
                        <td align="center">{ formatDateTime(item.created_at) }</td>
                        <td align="center">{ formatDateTime(item.pushed_at) }</td>                        
                    </tr>
                )) }
                    </tbody>
                </table>
            </div>
        );
    
};
export default Repository;