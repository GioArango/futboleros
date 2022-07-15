import { useContext, useState } from "react";
import { LeagueTeamContext } from "../../context/LeagueTeamContext";
import { FetchHelper } from "../../helpers/FetchHelper";
import { useForm } from "../../hooks/useForm"
import { Loader } from "../../ui/components";
import { InputSearch, LeagueList } from "../components";

export const SearchLeague = () => {

  const [loading, setLoading] = useState(false);
  const { leaguesData, setLeagues } = useContext(LeagueTeamContext);


  const { searchLeague, onInputChange, onResetForm } = useForm({
    searchLeague: ''
  });

  const getLeagues = async () => {
    setLoading(true);
    const { response } = await FetchHelper(`https://api-football-v1.p.rapidapi.com/v3/leagues?country=${searchLeague}`, 'GET');
    console.log(response);
    setLoading(false);
    setLeagues(response);
  }

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if(searchLeague.trim().length < 1) return;
    getLeagues();
    onResetForm();
  }

  return (
    <div className="m-3">
      <h1 className="text-center">App</h1>
      <InputSearch 
        inputName='searchLeague'
        inputValue={ searchLeague }
        onChange={ onInputChange }
        onSearchSubmit={ onSearchSubmit }
      />
      
      {
        (loading) 
        && <Loader />
      }


      {
        (leaguesData?.length > 0)
        &&
        <LeagueList />
      }    
      
    </div>
  )
}


