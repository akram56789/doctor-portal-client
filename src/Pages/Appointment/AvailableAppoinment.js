import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinment = ({ date, setDate }) => {
    const [services, serServices] = useState([])
    const [treatment, setTreatment] = useState(null)
   

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => serServices(data))
    }, [])
    return (
        <div >
         <div>
         <h4 className='text-xl text-secondary text-center'>Available Appointments on {format(date, 'PP')}</h4>
         </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal 
            date={date}
             treatment={treatment}
             setTreatment={setTreatment}
             ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;