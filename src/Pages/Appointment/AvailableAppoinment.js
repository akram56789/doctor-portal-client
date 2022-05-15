import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppoinment = ({date, setDate}) => {
    const [services, serServices] = useState([])

    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <h4 className='text-xl text-secondary   text-center'>Available Appointments on {format(date, 'PP')}</h4>
        </div>
    );
};

export default AvailableAppoinment;