import React from 'react';

function Skeleton({className,...others}) {

    return (
        <div>
        <div
      className={`${className} animate-pulse bg-dark-lighten rounded-md `}
        {...others}
    >
        </div>

        </div>
    );
}

export default Skeleton;