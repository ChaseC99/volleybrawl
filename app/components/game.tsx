import React from 'react';
import { Game as GameProps } from '../types';

export default function Game({ team1Players, team2Players, sets, court }: GameProps) {
    return (
        <tbody>
            <tr style={{height: 50}}></tr>
            <tr style={{borderSpacing: "10px"}}>
                <td colSpan={2}>Court {court}</td>
            </tr>
            <tr>
                <td style={{width: "50%"}}>{team1Players.join(", ")}</td>
                <td style={{width: "50%"}}>{team2Players.join(", ")}</td>
            </tr>
            {sets.map(({ team1Score, team2Score }, i) => (
                <tr key={i}>
                    <td>{team1Score}</td>
                    <td>{team2Score}</td>
                </tr>
            ))}
        </tbody>
    );
}

