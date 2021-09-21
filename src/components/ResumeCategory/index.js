import React from 'react';
import ResumeItem from '../ResumeItem';

function ResumeCategory({ category }) {

    return(
        <div className='category'>
            <h3>{category.title}</h3>
            {category.items.map(item => (
                <ResumeItem item={item}></ResumeItem>
            ))}
        </div>
    )
};

export default ResumeCategory;