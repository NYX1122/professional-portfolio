import React from 'react';

function ResumeItem({ item: { header, headerTwo, time, description } }) {

    return (
        <div className='item'>
            <h4>
                {header}
            </h4>
            <div>
                <h5>
                    {headerTwo}
                </h5>
                <h5>
                    {time}
                </h5>
            </div>
            <p>
                {description}
            </p>
        </div>
    )
};

export default ResumeItem;