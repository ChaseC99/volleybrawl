import { Game } from "./types";

const mockPlayers: string[] = [
    "Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Gina", "Harry", "Isabella", "Jack", "Kelly", "Liam", "Mason", "Nora", "Oliver", "Penelope", "Quinn", "Ryan", "Sophia", "Thomas"
];

const mockGames: Game[] = [
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
        team1Players: ["Gina", "Harry", "Isabella"],
        team2Players: ["Jack", "Kelly", "Liam"],
        sets: [
            { team1Score: 21, team2Score: 19 },
            { team1Score: 18, team2Score: 21 },
            { team1Score: 15, team2Score: 13 },
        ],
        court: 2
    },
    {
        team1Players: ["Mason", "Nora", "Oliver", "Penelope"],
        team2Players: ["Quinn", "Ryan", "Sophia", "Thomas"],
        sets: [],
        court: 3
    },
    {
        team1Players: ["Alice", "Bob", "Isabella"],
        team2Players: ["Jack", "Eve", "Frank"],
        sets: [
            { team1Score: 21, team2Score: 19 },
            { team1Score: 21, team2Score: 19 },
        ],
        court: 1
    },
    {
        team1Players: ["Gina", "Harry", "Isabella"],
        team2Players: ["Jack", "Kelly", "Liam"],
        sets: [
            { team1Score: 21, team2Score: 19 },
            { team1Score: 18, team2Score: 21 },
            { team1Score: 15, team2Score: 13 },
        ],
        court: 2
    },
    {
        team1Players: ["Mason", "Nora", "Oliver", "Penelope"],
        team2Players: ["Quinn", "Ryan", "Sophia", "Thomas"],
        sets: [],
        court: 3
    },
    {
        team1Players: ["Alice", "Bob", "Isabella"],
        team2Players: ["Jack", "Eve", "Frank"],
        sets: [
            { team1Score: 21, team2Score: 19 },
            { team1Score: 21, team2Score: 19 },
        ],
        court: 1
    },
    {
        team1Players: ["Gina", "Harry", "Isabella"],
        team2Players: ["Jack", "Kelly", "Liam"],
        sets: [
            { team1Score: 21, team2Score: 19 },
            { team1Score: 18, team2Score: 21 },
            { team1Score: 15, team2Score: 13 },
        ],
        court: 2
    },
];

export async function getGames(): Promise<Game[]> {
    return mockGames;
}

export async function getGamesFor(player: string): Promise<Game[]> {
    return mockGames.filter(game => game.team1Players.includes(player) || game.team2Players.includes(player));
}

export async function getPlayers(): Promise<string[]> {
    return mockPlayers;
}
