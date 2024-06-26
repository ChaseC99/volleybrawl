import GamesList from "../components/games-list";
import { getGames } from "../data";

export default async function Schedule() {
    const {games, lastUpdated} = await getGames();
    
    return (
        <div style={{marginBottom: 100}}>
            <GamesList games={games} />
            {
                lastUpdated && (
                    <div style={{color: "lightgray", textAlign: "center"}}>
                        Last updated: {lastUpdated}
                    </div>
                )
            }
        </div>
    );
}