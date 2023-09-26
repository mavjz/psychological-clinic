import { createContext, useState } from 'react';
import { WrapperType } from 'types/wrapper';

const AppointmentDataContext = createContext<any>({} as any);

const AppointmentDataContextProvider = ({ children }: WrapperType) => {
    const [appointmentID, setAppointmentID] = useState();

    return (
        <AppointmentDataContext.Provider value={{ appointmentID, setAppointmentID }}>
            {children}
        </AppointmentDataContext.Provider>
    );
};

export { AppointmentDataContext, AppointmentDataContextProvider };
