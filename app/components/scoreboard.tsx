import React from 'react';
import styles from './scoreboard.module.css';

export default function Scoreboard() {
    // TODO: Load these from google sheets
    const teamAName = "Team A";
    const teamBName = "Team B";
    const teamAScore = 0;
    const teamBScore = 0;

    return (
        <div className={styles.scoreboardContainer}>
            <div className={styles.teamsSection}>
                <h2 className={styles.teamName}>{teamAName}</h2>
                <div className={styles.vs}>VS</div>
                <h2 className={styles.teamName}>{teamBName}</h2>
            </div>
                        
            <div className={styles.scoreSection}>
                <span className={styles.score}>{teamAScore}</span>
                <div className={styles.divider}></div>    
                <span className={styles.score}>{teamBScore}</span>
            </div>
        </div>
    );
};