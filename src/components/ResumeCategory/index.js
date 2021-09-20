import React from 'react';
import ResumeItem from '../ResumeItem';

function ResumeCategory({ category }) {

    return(
        <div>
            <h3>{category.title}</h3>
            {category.education.map(item => (
                <ResumeItem item={item}></ResumeItem>
            ))}
        </div>
    )
};

export default ResumeCategory;