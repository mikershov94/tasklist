import React from 'react';
import TaskList from '../task-list';
import Panel from '../panel';

import "./app.sass";

class App extends React.Component {
    constructor() {
        super();
        this.initId = 0;

        this.createTask = (description, date, priority="Низкий") => {
            return {
                id: this.initId++,
                description: description,
                status: "Новая",
                priority: priority,
                datePlan: date,
                dateFact: "-"
            }
        };

        this.state = {
            tasks: [
                this.createTask("Описание задачи №1", new Date("2019-1-1")),
                this.createTask("Описание задачи №2", new Date("2019-4-23"), "Средний"),
                this.createTask("Описание задачи №3", new Date("2019-2-16"), "Высокий"),
                this.createTask("Описание задачи №4", new Date("2019-5-12"), "Средний"),
            ],
        };

        this.handleAddTask = (formState) => {
            const newTask = this.createTask(formState.description,
                                            formState.datePlan,
                                            formState.priority);
            this.setState(({tasks}) => {
                const newData = [
                    ...tasks,
                    newTask
                ];
                
                return {
                    tasks: newData,
                }
            });
        };

        this.handlerDeleteTask = (id) => {
            this.setState(({tasks}) => {
                const idx = tasks.findIndex((task) => task.id === id);

                const before = tasks.slice(0, idx);
                const after = tasks.slice(idx + 1);

                const newData = [
                    ...before,
                    ...after
                ];

                return {
                    tasks: newData,
                };
            })
        };
    };
    
    render() {
        return(
            <div className="container">
                <Panel handleAddTask={this.handleAddTask} />
                <TaskList data={this.state.tasks}
                          handlerDeleteTask={this.handlerDeleteTask} />
            </div>
        );
    }
};

export default App;