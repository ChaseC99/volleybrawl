import React from 'react';
import styles from './scoreboard.module.css';
import { TeamScore } from '../types';

type ScoreboardProps = {
    teamScores: [TeamScore, TeamScore];
};

export default function Scoreboard({ teamScores }: ScoreboardProps) {;
    const { name: teamAName, score: teamAScore } = teamScores[0];
    const { name: teamBName, score: teamBScore } = teamScores[1];

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