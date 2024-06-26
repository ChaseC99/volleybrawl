import GamesList from "../components/games-list";
import { Game } from "../types";

type ScheduleProps = {
    games: Game[];
    lastUpdated: string;
};

export default async function Schedule({ games, lastUpdated }: ScheduleProps) {
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