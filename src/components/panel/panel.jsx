import React from 'react';
import ModalAdd from '../modal-add';
import SearchForm from '../search-form';
import FilterAll from '../filter-all';
import FilterNew from '../filter-new';
import FilterProcess from '../filter-process';
import FIlterComplete from '../filter-complete';

import "./panel.sass";
import FilterComplete from '../filter-complete';

const Panel = ({handlerAddTask, onSearchTask, onClickFilter, filter, counts}) => {
    return(
        <div className="panel">
            <ModalAdd handlerAddTask={handlerAddTask} />
            <SearchForm onSearchTask={onSearchTask} />
            <FilterAll onClickFilter={onClickFilter}
                       active={filter === 'all' ? true : false}
                       count={counts.all} />
            <FilterNew onClickFilter={onClickFilter}
                       active={filter === 'new' ? true : false}
                       count={counts.new} />
            <FilterProcess onClickFilter={onClickFilter}
                           active={filter === 'process' ? true : false}
                           count={counts.process} />
            <FilterComplete onClickFilter={onClickFilter}
                            active={filter === 'complete' ? true : false}
                            count={counts.complete} />
        </div>
    );
};

export default Panel;