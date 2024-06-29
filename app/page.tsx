"use client"
import Scoreboard from "./components/scoreboard";
import Schedule from "./components/schedule";
import { getGames, getTeamScores } from "./data";
import { useEffect, useState } from "react";
import { Game, TeamScore } from "./types";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [teamScores, setTeamScores] = useState<[TeamScore, TeamScore]>(
    [{ name: "Team One", score: 0, totalPoints: 0 }, { name: "Team Two", score: 0, totalPoints: 0 }]
  );
  const [games, setGames] = useState<Game[]>([]);
  const [lastUpdated, setLastUpdated] = useState("");

  // Fetch team scores and games
  useEffect(() => {
    getGames().then(({ games, lastUpdated }) => {
      setGames(games);
      setLastUpdated(lastUpdated);
      setTeamScores(getTeamScores(games));
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Scoreboard teamScores={teamScores} loading={loading}/>
      <Schedule games={games} lastUpdated={lastUpdated} loading={games.length == 0}/>
    </div> 
  );
}
