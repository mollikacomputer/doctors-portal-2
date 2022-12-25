import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import location from '../../assets/icons/marker.svg';
import marker from '../../assets/icons/marker.svg';
const Info = () => {
    return (
        <div className='grid grid-col-1 lg:grid-cols-3 gap-6 my-16'>
          <InfoCard image = {clock} bgClass = "bg-gradient-to-r from-primary to-secondary " title="Time slote" />  
          <InfoCard image = {location} bgClass = "bg-[#3A4256]" title="Tritment location" />  
          <InfoCard image = {marker}  bgClass = "bg-gradient-to-r from-primary to-secondary" title="title 3"/>  
        </div>
    );
};

export default Info;