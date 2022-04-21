import React, {useState, useEffect} from 'react';
import { Link } from 'react-router';

function User() {   
    const [user, setUser] = useState({});
    const stats = [
        {
            name: 'Public Repos',
            value: user.public_repos,
            url: `/user/${this.props.params.username}/repos`
        }
    ];
    const getData = () => {
        fetch(`https://api.github.com/users/${this.props.params.username}`)
        .then(response => response.json())
        .then(
            user => { setUser(user); }
        );
    }

    const renderStat = (stat) => {
        return (
            <li key={stat.name} className="user-info__stat">
                <Link to={stat.url}>
                    <p className="user-info__stat-value">{stat.value}</p>
                    <p className="user-info__stat-name">{stat.name}</p>
                </Link>
            </li>
        );
    }
    useEffect(() => {
        getData();
    });
    
    if (!user) {
        return (<div className="user-page">LOADING...</div>);
    }
    return (
        <div className="user-page">
            <div className="user-info">
                <Link className="user-info__text" to={`/user/${user.login}`}>
                    <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                    <h2 className="user-info__title">{user.login} ({user.name})</h2>
                    <p className="user-info__bio">{user.bio}</p>
                </Link>

                <ul className="user-info__stats">
                    {stats && stats.map(renderStat)}
                </ul>
            </div>
        </div>
    );
};

export default User;