import React from 'react';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            term: '',
        }

        this.handlerInput = (e) => {
            this.setState({
                term: e.target.value
            })
            this.props.onSearchTask(this.state.term);
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