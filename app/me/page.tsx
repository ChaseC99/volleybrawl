"use client"
import { useEffect, useState } from "react";
import PlayerPicker from "../components/player-picker";
import { getGamesFor } from "../data";
import { Game as GameType } from "../types";
import Game from "../components/game";

export default function Me() {
    const [player, setPlayer] = useState(
        typeof window !== 'undefined' ? localStorage.getItem("player") || "" : ""
    );
    const [games, setGames] = useState<GameType[]>([]);

    // When the player name changes, 
    // save it to local storage and fetch the player's data
    useEffect(() => {
        localStorage.setItem("player", player);
        getGamesFor(player).then((games) => setGames(games));
    }, [player]);

    return (
        <div style={{marginBottom: 100}}>
            <PlayerPicker value={player} onChange={setPlayer}/>
            <div>
                <h2>Your Games</h2>
                <table style={{borderCollapse: 'collapse', width: '100%', textAlign: 'center'}}>
                    {
                        games.map((game, i) => (
                            <Game key={i} {...game} />
                        ))
                    }
                </table>
            </div>
        </div>
    );
}