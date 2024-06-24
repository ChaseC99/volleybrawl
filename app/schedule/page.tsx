import Game from "../components/game";
import { getGames } from "../data";

export default async function Schedule() {
    const games = await getGames();
    
    return (
        <div>
            <table style={{borderCollapse: 'collapse', width: '100%', textAlign: 'center'}}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Team 1</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Team 2</th>
                    </tr>
                </thead>

                {
                    games.map((game, i) => (
                        <Game key={i} {...game} />
                    ))
                }
            </table>
        </div>
    );
}