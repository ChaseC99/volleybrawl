import React from 'react';
import styles from './scoreboard.module.css';
import { getTeamScores } from '../data';

export default async function Scoreboard() {
    const teamScores = Object.entries(await getTeamScores());
    const teamAName = teamScores[0][0];
    const teamAScore = teamScores[0][1];
    const teamBName = teamScores[1][0];
    const teamBScore = teamScores[1][1];

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