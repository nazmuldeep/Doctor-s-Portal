import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppoinments from '../AppointmentBanner/AvailableAppoinments/AvailableAppoinments';


const Appoitnment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppoinments
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AvailableAppoinments>
        </div>

    );
};

export default Appoitnment;