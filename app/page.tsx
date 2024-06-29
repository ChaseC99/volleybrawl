"use client"
import Scoreboard from "./components/scoreboard";
import Schedule from "./components/schedule";
import { getGames, getTeamScores } from "./data";
import { useEffect, useState } from "react";
import { Game, TeamScore } from "./types";

export default function Home() {
  const [games, setGames] = useState<Game[]>(
    typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("games") || "[]") as Game[] : []
  );
  const [teamScores, setTeamScores] = useState<[TeamScore, TeamScore]>(
    games.length > 0 ? getTeamScores(games) :
    [{ name: "Team One", score: 0, totalPoints: 0 }, { name: "Blue Brawlled", score: 0, totalPoints: 0 }]
  );
  const [lastUpdated, setLastUpdated] = useState("");

  // Fetch team scores and games
  useEffect(() => {
    getGames().then(({ games, lastUpdated }) => {
      localStorage.setItem("games", JSON.stringify(games));
      setGames(games);
      setLastUpdated(lastUpdated);
      setTeamScores(getTeamScores(games));
    });
  }, []);

  return (
    <div>
      <Scoreboard teamScores={teamScores} loading={games.length == 0}/>
      <Schedule games={games} lastUpdated={lastUpdated} loading={games.length == 0}/>
    </div> 
  );
}
