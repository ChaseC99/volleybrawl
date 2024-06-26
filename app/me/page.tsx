"use client"
import { useEffect, useState } from "react";
import PlayerPicker from "../components/player-picker";
import { getGamesFor } from "../data";
import { Game as GameType } from "../types";
import GamesList from "../components/games-list";

export default function Me() {
    const [player, setPlayer] = useState(
        typeof window !== 'undefined' ? localStorage.getItem("player") || "" : ""
    );
    const [games, setGames] = useState<GameType[]>([]);
    const [lastUpdated, setLastUpdated] = useState("");

    // When the player name changes, 
    // save it to local storage and fetch the player's data
    useEffect(() => {
        localStorage.setItem("player", player);
        getGamesFor(player).then(({ games, lastUpdated }) => {
            setGames(games)
            setLastUpdated(lastUpdated || "");
        });
    }, [player]);

    return (
        <div style={{ marginBottom: 100, margin: 12 }}>
            <PlayerPicker value={player} onChange={setPlayer} />
            {
                games.length > 0 && (
                    <div style={{ marginTop: 24 }}>
                        <h2>Your Games</h2>
                        <GamesList games={games} />
                        {
                            lastUpdated && (
                                <div style={{ color: "lightgray", textAlign: "center", marginTop: 24 }}>
                                    Last updated: {lastUpdated}
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}