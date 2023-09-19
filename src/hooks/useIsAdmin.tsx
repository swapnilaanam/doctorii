"use client"

import axios from "axios";
import { useSession } from "next-auth/react";
import {useQuery} from '@tanstack/react-query';

const useIsAdmin = () => {

    const session = useSession();
    const email = session?.data?.user?.email;

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', email],
        queryFn: async() => {
            const response = await axios.get(`/api/users/email/${email}/admin`)
            return response.data;
        } 
    })

    return [isAdmin, isAdminLoading];
};

export default useIsAdmin;