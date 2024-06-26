"use client";
import { Collapse } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import styles from './collapsible.module.css';

type CollapsibleProps = {
    title: string;
    children: React.ReactNode;
    roundedTop?: boolean;
    roundedBottom?: boolean;
};

export default function Collapsible({title, children, roundedTop, roundedBottom}: CollapsibleProps) {
    const [open, setOpen] = useState(false);

    return (
        <div 
            onClick={() => setOpen(!open)}  
            className={`${styles.collapsible} ${roundedTop ? styles.roundedTop : ''} ${roundedBottom ? styles.roundedBottom : ''}`}
        >
            <div className={styles.collapsibleBar}>
                <h2>{title}</h2>
                {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            </div>
            <Collapse in={open}>
                <div className={styles.collapsibleContent}>
                    {children}
                </div>
            </Collapse>
        </div>
    );
}