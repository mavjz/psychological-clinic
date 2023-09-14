import React from 'react';
import { AppointmentApprovalType } from './helper';
import Headline from '../Headline';
import Paragraph from '../Paragraph';

const AppointmentApproval = ({ therapist, date, time }: AppointmentApprovalType) => {
    return (
        <div className="appointmentapproval">
            <div className="appointmentapproval-alert">
                <Headline
                    variant="h1"
                    text="Potwierdzenie wizyty"
                    colorClass="greendark"
                    placeClass="center"
                />
                <Paragraph
                    size="medium"
                    text={"Wizyta u " + therapist + ' w dniu ' + date + ' o godzinie ' + time}
                    colorClass="greendark"
                />
                <div className="appointmentapproval-alert__buttons">

                </div>
            </div>
        </div>
    );
};

export default AppointmentApproval;
