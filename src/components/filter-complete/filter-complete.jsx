import React from 'react';

const FilterComplete = (props) => {
    const bemClass = props.active ? "panel__complete panel__complete_active" : "panel__complete";

    return(
        <div className={bemClass}
             onClick={() => props.onClickFilter('complete')}>
            Завершено - <span>2</span>
        </div>
    );
};

export default FilterComplete;