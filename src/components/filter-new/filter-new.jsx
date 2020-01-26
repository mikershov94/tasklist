import React from 'react';

const FilterNew = (props) => {
    const bemClass = props.active ? "panel__new panel__new_active" : "panel__new";

    return(
        <div className={bemClass}
             onClick={() => props.onClickFilter('new')}>
            Новых - <span>1</span>
        </div>
    );
};

export default FilterNew;