import { useContext, useState } from "react";
import { LeagueTeamContext } from "../../context/LeagueTeamContext";
import { FetchHelper } from "../../helpers/FetchHelper";
import { useForm } from "../../hooks/useForm"
import { Loader, PlaceholderCard } from "../../ui/components";
import { InputSearch, LeagueList } from "../components";

export const SearchLeague = () => {

  const [loading, setLoading] = useState(false);
  const { leaguesData, setLeagues } = useContext(LeagueTeamContext);


  const { searchLeague, onInputChange, onResetForm } = useForm({
    searchLeague: ''
  });

  const getLeagues = async () => {
    setLoading(true);
    setLeagues([])
    const { response } = await FetchHelper(`https://api-football-v1.p.rapidapi.com/v3/leagues?country=${searchLeague}`, 'GET');
    console.log(response);
    setLoading(false);
    setLeagues(response);
  }

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchLeague.trim().length < 1) return;
    getLeagues();
    onResetForm();
  }

  return (
    <div className="container">
      {/* <div className="d-flex justify-content-center my-5 shadow-lg"> */}
        <div className="card my-5" style={{ width: "100%", height: "100%" }}>
          <img src="https://i.ibb.co/GFRrFzF/audience-g2cd9f5f27-1920.jpg" className="img-fluid" alt="Football Fans" style={{ height: "10rem" }} />
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <InputSearch
                inputName='searchLeague'
                inputValue={searchLeague}
                onChange={onInputChange}
                onSearchSubmit={onSearchSubmit}
              />
            </div>

            {
              (loading)
              && <PlaceholderCard />
            }

            {
              (leaguesData?.length > 0)
              &&
              <LeagueList />
            }

          </div>
        </div>
      {/* </div> */}

    </div>
  )
}


