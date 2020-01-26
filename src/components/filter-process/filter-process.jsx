import React from 'react';

const FilterProcess = (props) => {
    const bemClass = props.active ? "panel__process panel__process_active" : "panel__process";

    return(
        <div className={bemClass}
             onClick={() => props.onClickFilter('process')}>
            <span>{`В работе - ${props.count}`}</span>
        </div>
    );
};

export default FilterProcess;