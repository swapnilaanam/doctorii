"use client"

import axios from "axios";
import { useSession } from "next-auth/react";
import {useQuery} from '@tanstack/react-query';

const useIsDoctor = () => {

    const session = useSession();
    const email = session?.data?.user?.email;

    const { data: isDoctor, isLoading: isDoctorLoading } = useQuery({
        queryKey: ['isDoctor', email],
        queryFn: async() => {
            const response = await axios.get(`/api/users/${email}/doctor`)
            return response.data;
        } 
    })

    return [isDoctor, isDoctorLoading];
};

export default useIsDoctor;