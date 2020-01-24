import React from 'react';
import TaskList from '../task-list';
import Panel from '../panel';

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
            tasks: [
                this.createTask("Описание задачи №1"),
                this.createTask("Описание задачи №2", "Средний"),
                this.createTask("Описание задачи №3", "Высокий"),
                this.createTask("Описание задачи №4", "Средний"),
            ],
        };

        this.handleAddTask = () => {
            console.log('Hello world!')
        };
    };
    
    render() {
        return(
            <div className="container">
                <Panel handleAddTask={this.handleAddTask} />
                <TaskList data={this.state.tasks} />
            </div>
        );
    }
};

export default App;