import React from 'react';

function ResumeItem({ item: { header, headerTwo, time, description, set } }) {

    return (
        <div className='item'>
            {description ? (
                <>
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
                </>
            ) : (
                <>
                    <div className='skillset'>
                        <h4>{header}</h4>
                        <div>
                        {set.map(skill => (
                            <h5>{skill}</h5>
                        ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
};

export default ResumeItem;