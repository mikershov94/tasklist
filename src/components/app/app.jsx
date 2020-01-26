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

        this.editTask = (newProps, id) => {
            return {
                id: id,
                description: newProps.description,
                status: newProps.status,
                priority: newProps.priority,
                datePlan: newProps.datePlan,
                dateFact: newProps.status === "Завершена" ? new Date() : "-"
            }
        };

        this.state = {
            edit: false,
            tasks: [
                this.createTask("Описание задачи №1", new Date("2019-1-1")),
                this.createTask("Описание задачи №2", new Date("2019-4-23"), "Средний"),
                this.createTask("Описание задачи №3", new Date("2019-2-16"), "Высокий"),
                this.createTask("Описание задачи №4", new Date("2019-5-12"), "Средний"),
            ],
            filter: 'all',
            term: '',
        };

        this.handlerAddTask = (formState) => {
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


        this.handlerEditTask = (id, formState) => {
            this.setState(({tasks}) => {
                const idx = tasks.findIndex((task) => task.id === id);
                const newTask = this.editTask(formState, id);
                
                const before = tasks.slice(0, idx);
                const after = tasks.slice(idx + 1);

                const newData = [
                    ...before,
                    newTask,
                    ...after
                ];

                return {
                    tasks: newData,
                }; 
            })
        }

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

        this.onSearchTask = (termStr) => {
            this.setState({
                term: termStr,
            })
        };

        this.onClickFilter = (filterStr) => {
            this.setState({
                filter: filterStr
            })
        };

        this.search = (items, term) => {
            if (term.length === 0) {
                return items;
            }
            
            return items.filter((item) => {
                return item.description.toLowerCase().indexOf(term.toLowerCase()) > -1;
            })
        }

        this.filter = (items, filter) => {
            switch (filter) {
                case 'all':
                    return items;
                case 'new':
                    return items.filter((item) => item.status === "Новая");
                case 'process':
                    return items.filter((item) => item.status === "В работе");
                case 'complete':
                    return items.filter((item) => item.status === "Завершена");
                default:
                    return items;
            }
        }
    };

    
    render() {
        const tasks = this.state.tasks;
        const visibleTasks = this.search(tasks, this.state.term);
        const filteredTasks = this.filter(visibleTasks, this.state.filter);

        return(
            <div className="container">
                <Panel handlerAddTask={this.handlerAddTask}
                       onSearchTask={this.onSearchTask}
                       filter={this.state.filter}
                       onClickFilter={this.onClickFilter} />
                <TaskList data={filteredTasks}
                          handlerDeleteTask={this.handlerDeleteTask}
                          handlerEditTask={this.handlerEditTask} />
            </div>
        );
    }
};

export default App;