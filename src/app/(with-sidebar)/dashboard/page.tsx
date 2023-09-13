"use client"

import DoctorDashboard from "@/components/DoctorDashboard/DoctorDashboard";
import PatientDashboard from "@/components/PatientDashboard/PatientDashboard";
import useIsDoctor from "@/hooks/useIsDoctor";
import useIsPatient from "@/hooks/useIsPatient";

const Dashboard = () => {
    const [isDoctor, isDoctorLoading] = useIsDoctor();
    const [isPatient, isPatientLoading] = useIsPatient();

    return (
        <div>
            {(!isDoctorLoading && isDoctor) &&  <DoctorDashboard /> } 
            {(!isPatientLoading && isPatient) &&  <PatientDashboard /> } 
        </div>
    );
};

export default Dashboard;