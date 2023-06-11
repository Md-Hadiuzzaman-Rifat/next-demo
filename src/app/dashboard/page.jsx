"use client"
import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const Dashboard = () => {
    const session=useSession()
    const router=useRouter()

     if(session.status === "loading"){
        return <p>Loading...</p>
     }

    if (session.status === "unauthenticated"){
        router?.push("/dashboard/login")
    }

    if(session.status=== "authenticated"){
        return <h2>Dashboard</h2>
    }

};

export default Dashboard;