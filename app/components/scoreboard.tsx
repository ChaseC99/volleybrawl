"use client";
import React from 'react';
import styles from './scoreboard.module.css';
import { TeamScore } from '../types';
import { Skeleton } from '@mui/material';

type ScoreboardProps = {
    teamScores: [TeamScore, TeamScore];
    loading: boolean;
};

export default function Scoreboard({ teamScores, loading }: ScoreboardProps) {
    const { name: teamAName, score: teamAScore, totalPoints: teamATotalPoints } = teamScores[0];
    const { name: teamBName, score: teamBScore, totalPoints: teamBTotalPoints } = teamScores[1];

    return (
        <div className={styles.scoreboardContainer}>
            <div className={styles.teamsSection}>
                <h2 className={styles.teamName}>{teamAName}</h2>
                <div className={styles.vs}>VS</div>
                <h2 className={styles.teamName}>{teamBName}</h2>
            </div>

            <div className={styles.scoreSection}>
                <div className={styles.teamScore}>
                    <span className={styles.score}>
                        {loading ? "-" : teamAScore}
                    </span>
                    <span className={styles.totalPoints}>
                        {loading ? <Skeleton animation="wave" width={50} sx={{bgcolor: "rgba(255, 255, 255, 0.5)"}}/> : `${teamATotalPoints} points`}
                    </span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.teamScore}>
                    <span className={styles.score}>
                        {loading ? "-" : teamBScore}
                    </span>
                    <span className={styles.totalPoints}>
                        {loading ? <Skeleton animation="wave" width={50} sx={{bgcolor: "rgba(255, 255, 255, 0.5)"}}/> : `${teamBTotalPoints} points`}
                    </span>
                </div>
            </div>
        </div>
    );
};