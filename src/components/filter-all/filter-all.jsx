import React from 'react';

const FilterAll = (props) => {
    const bemClass = props.active ? "panel__all panel__all_active" : "panel__all";

    return(
        <div className={bemClass}
             onClick={() => props.onClickFilter('all')}>
            Всего - <span>4</span>
        </div>
    );
};

export default FilterAll;