type GameSet = {
    team1Score: number;
    team2Score: number;
};

export type Game = {
    team1Name: string;
    team2Name: string;
    team1Players: string[];
    team2Players: string[];
    sets: GameSet[];
    court: number;
    time?: string;
    refs: [string, string];
};

export type TeamScore = {
    name: string;
    score: number;
};