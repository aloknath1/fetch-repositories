import React from 'react';
import { Link } from 'react-router';

function App(props) {   
    return (
        <div className="main-app">
            <header className="main-header">
                <h1><Link to="/">React GitHub Project</Link></h1>
            </header>
            <main className="main-content">
                {props.children}
            </main>
        </div>
    );    
};

export default App;