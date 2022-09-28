import React from 'react';
import { useQuery } from 'react-query';

const ManageDoctor = () => {

    const {data: doctors , isLoading} = useQuery('doctors' , () => fetch().then(res => res.json())
    return (
        <div>
            <h1>manage doctor</h1>
        </div>
    );
};

export default ManageDoctor;