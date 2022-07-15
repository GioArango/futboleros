import { LeagueTeamProvider } from "./context/LeagueTeamProvider";
import { AppRouter } from "./router/AppRouter";

export const FutbolerosApp = () => {
  return (
    <LeagueTeamProvider>
      <AppRouter />
    </LeagueTeamProvider>
  )
}
