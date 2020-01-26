import React from 'react';
import ModalAdd from '../modal-add';
import SearchForm from '../search-form';
import FilterAll from '../filter-all';
import FilterNew from '../filter-new';
import FilterProcess from '../filter-process';
import FIlterComplete from '../filter-complete';

import "./panel.sass";
import FilterComplete from '../filter-complete';

const Panel = ({handlerAddTask, onSearchTask}) => {
    const onClickFilter = (filter) => {

    };

    return(
        <div className="panel">
            <ModalAdd handlerAddTask={handlerAddTask} />
            <SearchForm onSearchTask={onSearchTask} />
            <FilterAll />
            <FilterNew />
            <FilterProcess />
            <FilterComplete />
        </div>
    );
};

export default Panel;