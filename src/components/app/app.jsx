import React from 'react';
import TaskList from '../task-list';

import "./app.sass";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
        };
    };
    
    render() {
        return(
            <div className="container">
                <TaskList />
            </div>
        );
    }
};

export default App;