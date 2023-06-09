"use client"
import React from 'react';
import { useSession } from 'next-auth/react';
const Dashboard = () => {
    const session=useSession()
    return (
        <div>
            {
                console.log(session)
            }
            <h2>This is dashboard page.</h2>
        </div>
    );
};

export default Dashboard;