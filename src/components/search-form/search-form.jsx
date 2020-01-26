import React from 'react';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            term: '',
        }

        this.handlerInput = (e) => {
            const term = e.target.value;

            this.setState({
                term: term
            })
            this.props.onSearchTask(term);
        }
    }

    render() {
        return(
            <div className="panel__find">
                <input type="text"
                       placeholder="Поиск"
                       onChange={this.handlerInput} />
            </div>
        );
    }
}

export default SearchForm;