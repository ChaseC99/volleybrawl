import Game from "../components/game";
import { getGames } from "../data";

export default async function Schedule() {
    const {games, lastUpdated} = await getGames();
    
    return (
        <div style={{marginBottom: 100}}>
            
            <div style={{display: "flex", gap: 12, flexDirection: "column", margin: "16px 8px"}}>
                {
                    games.map((game, i) => (
                        <Game key={i} {...game} />
                    ))
                }
            </div>
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