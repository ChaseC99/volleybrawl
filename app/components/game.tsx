import React from 'react';
import styles from './game.module.css';
import { Game as GameProps } from '../types';

export default function Game({ team1Players, team2Players, sets, court, time }: GameProps) {
    // Filter out sets that are not yet played
    sets = sets.filter(({ team1Score, team2Score }) => team1Score !== 0 || team2Score !== 0);

    return (
        <div className={styles.game}>
            <div className={styles.gameHeader}>
                <span>Court {court}</span>
                <span>{time?.toLowerCase()}</span>
            </div>

            <div className={styles.playersContainer}>
                <div>{team1Players.join(", ")}</div>
                <div>vs</div>
                <div>{team2Players.join(", ")}</div>
            </div>
            

            {sets.map(({ team1Score, team2Score }, i) => (
                <div key={i} className={styles.scores}>
                    <div>{team1Score}</div>
                    -
                    <div>{team2Score}</div>
                </div>
            ))}
        </div>
    );
}

