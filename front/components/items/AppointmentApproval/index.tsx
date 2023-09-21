import React, { useContext } from 'react';
import Headline from '../Headline';
import Paragraph from '../Paragraph';
import { AppointmentDataContext } from 'components/wrappers/AppointmentDataContext';

const AppointmentApproval = () => {
    document.body.style.overflow = 'hidden';
    const { appointmentID } = useContext(AppointmentDataContext);
    return (
        <div className="appointmentapproval">
            <div className="appointmentapproval-alert">
                <Headline
                    variant="h1"
                    text="Potwierdzenie wizyty"
                    colorClass="greendark"
                    placeClass="center"
                />
                {[appointmentID]?.map((item, index) => (
                    <Paragraph
                        key={index}
                        size="medium"
                        text={
                            'Wizyta u ' +
                            item?.attributes.therapist.data.attributes.first_name +
                            ' ' +
                            item?.attributes.therapist.data.attributes.last_name +
                            ' w dniu ' +
                            item?.attributes.date.split('-').reverse().join('.') +
                            'r.' +
                            ' o godzinie ' +
                            item?.attributes.time.slice(0, 5)
                        }
                        colorClass="greendark"
                    />
                ))}

                <div className="appointmentapproval-alert__buttons"></div>
            </div>
        </div>
    );
};

export default AppointmentApproval;
