import { Game } from "./types";

const GAMES_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTu-qjstdMXdzsFt_6AKm-spImtZA02wt5dlkgE0c6OflhnZ7KNvDKC1T8mKDp3M3C3fN_nyYlaA45m/pub?gid=1316465651&single=true&output=csv';

const mockPlayers: string[] = [ "Erik", "Constance", "Cole", "Alex S", "Hoang", "Kristi", "Chase", "Colina", "Ben", "Justine", "Ash", "Jacob", "Alex C", "Susan", "Frank", "Joshua", "Jackie", "Jeffrey", "Isabel", "Allison", "Tyler", "Vivian"];

async function loadCSVData(url: string, ignoreHeader: boolean = true) {
    // Use fetch to get the CSV data
    const results = await fetch(url);
    const csvData = await results.text();
    
    // Parse the CSV data
    const rows = csvData.split('\n');

    if (ignoreHeader) {
        // Ignore the first row (header)
        rows.shift();
    }

    return rows;
}

function mapCSVDataToGames(csvData: string[]): Game[] {
    // Each 2 rows represent a game
    // The CSV data is formatted as follows:
    //  time, court, team name, player1, player2, player3, player4, set1 score, set2 score
    // 
    // Example:
    //  10:15,1,Digma Balls,Erik,Constance,Cole,Alex S,13,17
    //  10:15,,Calm Yo Tips,Hoang,Kristi,Chase,Colina,21,21

    const games: Game[] = [];
    for (let i = 0; i < csvData.length; i += 2) {
        const [time, court, team1Name, t1_player1, t1_player2, t1_player3, t1_player4, t1_set1, t1_set2] = csvData[i].split(',');
        const [, , team2Name, t2_player1, t2_player2, t2_player3, t2_player4, t2_set1, t2_set2] = csvData[i + 1].split(',');
        
        const team1Players = [t1_player1, t1_player2, t1_player3, t1_player4].filter(player => player !== '');
        const team2Players = [t2_player1, t2_player2, t2_player3, t2_player4].filter(player => player !== '');
        const sets = [
            { team1Score: parseInt(t1_set1), team2Score: parseInt(t2_set1) },
            { team1Score: parseInt(t1_set2), team2Score: parseInt(t2_set2) }
        ]
        
        games.push({
            team1Players,
            team1Name,
            team2Players,
            team2Name,
            sets,
            court: parseInt(court),
            time
        });
    }

    return games;
}

export async function getGames(): Promise<Game[]> {
    const csvData = await loadCSVData(GAMES_CSV_URL);
    return mapCSVDataToGames(csvData);
}

export async function getGamesFor(player: string): Promise<Game[]> {
    const csvData = await loadCSVData(GAMES_CSV_URL);
    const games = mapCSVDataToGames(csvData);
    return games.filter(game => game.team1Players.includes(player) || game.team2Players.includes(player));
}

export async function getTeamScores(): Promise<{ [team: string]: number }> {
    const totalWins:{ [team: string]: number } = {};
    
    const games = await getGames();
    for (const game of games) {
        for (const set of game.sets) {
            if (set.team1Score >= 21 || set.team2Score >= 21) {
                if (set.team1Score > set.team2Score) {
                    totalWins[game.team1Name] = (totalWins[game.team1Name] || 0) + 1;
                } else {
                    totalWins[game.team2Name] = (totalWins[game.team2Name] || 0) + 1;
                }
            }
        }
    }

    return totalWins;
}

export async function getPlayers(): Promise<string[]> {
    return mockPlayers;
}
