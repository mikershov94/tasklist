import React from 'react';

const FilterNew = (props) => {
    const bemClass = props.active ? "panel__new panel__new_active" : "panel__new";

    return(
        <div className={bemClass}
             onClick={() => props.onClickFilter('new')}>
            <span>{`Новых - ${props.count}`}</span>
        </div>
    );
};

export default FilterNew;