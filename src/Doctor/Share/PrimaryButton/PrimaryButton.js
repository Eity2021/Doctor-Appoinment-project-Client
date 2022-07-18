import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button class="btn btn-primary bg-gradient-to-r from-secondary to primary text-info uppercase font-bold mt-6">{children}</button>
        </div>
    );
};

export default PrimaryButton;