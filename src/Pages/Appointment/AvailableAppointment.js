import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date, setDate}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect( () =>{
        fetch('http://localhost:4000/service')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <h4 className='text-3xl text-secondary text-center my-6' > You hav selected <span className="font-bold">{format(date, 'PP')}</span>  </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment = {setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal 
                        key={treatment}
                        date={date} 
                        treatment={treatment} 
                        setTreatment={setTreatment}

                        >
                        </BookingModal>}
        </div>
    );
};

export default AvailableAppointment;