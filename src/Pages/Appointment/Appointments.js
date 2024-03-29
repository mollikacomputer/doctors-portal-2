import React, { useState } from 'react';
import Footer from '../Shared/Footer';

import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointments = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate} />
            <AvailableAppointment date={date} setDate={setDate} />
            <Footer/>
        </div>
    );
};

export default Appointments;