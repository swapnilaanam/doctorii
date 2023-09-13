"use client"

import axios from "axios";
import { useSession } from "next-auth/react";
import {useQuery} from '@tanstack/react-query';

const useIsPatient = () => {

    const session = useSession();
    const email = session?.data?.user?.email;

    const { data: isPatient, isLoading: isPatientLoading } = useQuery({
        queryKey: ['isPatient', email],
        queryFn: async() => {
            const response = await axios.get(`/api/users/email/${email}/patient`)
            return response.data;
        } 
    })

    return [isPatient, isPatientLoading];
};

export default useIsPatient;