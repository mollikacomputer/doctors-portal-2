import React from 'react';
import Service from './Service';
import floride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id:1,
            name:"Floride Treatment",
            description:" Floride Treatment description here",
            image:floride,
        },      
        {
            _id:2,
            name:"Cavity Treatment",
            description:" Cavity Treatment description here",
            image:cavity,
        },
        {
            _id:3,
            name:"Teeth Whitening",
            description:" Teeth Whitening description here",
            image:whitening,
        }
    ]
    return (
        <div >
            <div>
                <h3 className='uppercase bold text-primary text-2xl'> our services</h3>
                <h2 className='text-3xl bold'> Service we provide</h2>
            </div>
            <div className='grid grid-col-1 lg:grid-cols-3 gap-6 my-16'>
            {
                services.map(service => <Service
                key={service._id}
                service = {service}
                ></Service>)
            }
            </div> 
        </div>
    );
};

export default Services;