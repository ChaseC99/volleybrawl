"use client";
import GamesList from "../components/games-list";
import { Game } from "../types";
import GameListLoading from "./games-list-loading";

type ScheduleProps = {
    games: Game[];
    lastUpdated: string;
    loading: boolean;
};

export default function Schedule({ games, lastUpdated, loading }: ScheduleProps) {
    if (loading) {
        return <GameListLoading />;
    }
    
    return (
        <div style={{ padding: "0 8px" }}>
            <GamesList games={games} />
            {
                lastUpdated && (
                    <div style={{ color: "lightgray", textAlign: "center", marginTop: 24 }}>
                        Last updated: {lastUpdated}
                    </div>
                )
            }
        </div>
    );
}