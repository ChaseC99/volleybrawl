"use client";
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { usePathname, useRouter } from 'next/navigation';

export default function TabBar() {
    const router = useRouter();
    const path = usePathname();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        router.push(newValue);
    };

    return (
        <div style={{position:"fixed", bottom:0, left:0, right:0}}>
            <BottomNavigation
                value={path}
                onChange={handleChange}
            >
                <BottomNavigationAction
                    label="Schedule"
                    value="/schedule"
                    icon={<CalendarMonthIcon />}
                />
                <BottomNavigationAction
                    label="Volleybrawl"
                    value="/"
                    icon={<SportsVolleyballIcon />}
                />
                <BottomNavigationAction
                    label="Me"
                    value="/me"
                    icon={<AccountCircleIcon />}
                />
            </BottomNavigation>
        </div>
    );
}