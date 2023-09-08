"use client"

import DoctorDashboard from "@/components/DoctorDashboard/DoctorDashboard";
import useIsDoctor from "@/hooks/useIsDoctor";

const Dashboard = () => {
    const [isDoctor, isDoctorLoading] = useIsDoctor();

    return (
        <div>
            {(!isDoctorLoading && isDoctor) &&  <DoctorDashboard /> } 
        </div>
    );
};

export default Dashboard;