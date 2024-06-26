import Scoreboard from "./components/scoreboard";
import Schedule from "./components/schedule";
import { getGames, getTeamScores } from "./data";

export default async function Home() {
  const {games, lastUpdated} = await getGames();
  const teamScores = getTeamScores(games);

  return (
    <div>
      <Scoreboard teamScores={teamScores}/>
      <Schedule games={games} lastUpdated={lastUpdated}/>
    </div> 
  );
}
