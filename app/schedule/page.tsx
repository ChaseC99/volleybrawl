import Game from "../components/game";

export default function Schedule() {
    const games = [
        {
            team1Players: ["Alice", "Bob", "Charlie"],
            team2Players: ["Dave", "Eve", "Frank"],
            sets: [
                { team1Score: 21, team2Score: 19 },
                { team1Score: 21, team2Score: 19 },
            ],
            court: 1
        },
        {
            team1Players: ["Alice", "Bob", "Charlie"],
            team2Players: ["Dave", "Eve", "Frank"],
            sets: [
                { team1Score: 21, team2Score: 19 },
                { team1Score: 18, team2Score: 21 },
                { team1Score: 15, team2Score: 13 },
            ],
            court: 2
        },
        {
            team1Players: ["Alice", "Bob", "Charlie", "Doug", "Doug"],
            team2Players: ["Dave", "Eve", "Frank"],
            sets: [],
            court: 3
        },

    ]
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