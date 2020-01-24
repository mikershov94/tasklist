import React from 'react';
import TaskList from '../task-list';

import "./app.sass";

class App extends React.Component {
    constructor() {
        super();
        this.initId = 0;

        this.createTask = (description, priority="Низкий") => {
            return {
                id: this.initId++,
                description: description,
                status: "Новая",
                priority: priority,
                datePlan: "01.01.2019",
                dateFact: "-"
            }
        };

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