import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import location from '../../assets/icons/marker.svg';
import marker from '../../assets/icons/marker.svg';
const Info = () => {
    return (
        <div className='grid grid-col-1 lg:grid-cols-3 gap-6 mx-6 my-16'>
          <InfoCard image = {clock} bgClass = "bg-primary" title="title 1" />  
          <InfoCard image = {location} bgClass = "bg-accent" title="title 2" />  
          <InfoCard image = {marker}  bgClass = "bg-secondary" title="title 3"/>  
 
        </div>
    );
};

export default Info;