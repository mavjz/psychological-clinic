import { strapiAppointmentQuery } from 'lib/strapi/appointments/queryType';
import { createContext, useState, useContext } from 'react';
import { WrapperType } from 'types/wrapper';

type AppointmentContextType = {
    appointmentID: strapiAppointmentQuery | null;
    setAppointmentID: (id: strapiAppointmentQuery | null) => void;
};

const AppointmentDataContext = createContext<AppointmentContextType | undefined>(undefined);

const AppointmentDataContextProvider = ({ children }: WrapperType) => {
    const [appointmentID, setAppointmentID] = useState<strapiAppointmentQuery | null>(null);

    return (
        <AppointmentDataContext.Provider value={{ appointmentID, setAppointmentID }}>
            {children}
        </AppointmentDataContext.Provider>
    );
};

// handle the case where the context value might be undefined
const useAppointmentContext = () => {
    const context = useContext(AppointmentDataContext);
    if (context === undefined) {
        throw new Error(
            'useAppointmentContext must be used within an AppointmentDataContextProvider'
        );
    }
    return context;
};

export { AppointmentDataContextProvider, useAppointmentContext };
