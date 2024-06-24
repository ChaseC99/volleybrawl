type GameSet = {
    team1Score: number;
    team2Score: number;
};

export type Game = {
    team1Players: string[];
    team2Players: string[];
    sets: GameSet[];
    court: number;
};