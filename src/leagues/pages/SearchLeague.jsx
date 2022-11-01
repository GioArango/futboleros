import { useEffect } from "react";
import { useContext, useState } from "react";
import { LeagueTeamContext } from "../../context/LeagueTeamContext";
import { FetchHelper } from "../../helpers/FetchHelper";
import { useForm } from "../../hooks/useForm"
import { Loader, PlaceholderCard } from "../../ui/components";
import { InputSearch, LeagueList, SelectCountry } from "../components";

export const SearchLeague = () => {

  const [loading, setLoading] = useState(false);
  const { leaguesData, setLeagues, countriesData, setCountries } = useContext(LeagueTeamContext);


  const { searchLeague, selectCountry, onInputChange, onResetForm } = useForm({
    searchLeague: '',
    selectCountry: ''
  });

  const getCountries = async () => {
    const response = await FetchHelper(`https://run.mocky.io/v3/94f11892-50c4-4519-8fd2-127aec46e684`, 'GET');
    console.log('COUNTRIES', response);
    setCountries(response);
  }

  const getLeagues = async () => {
    setLoading(true);
    // setLeagues([])
    const { response } = await FetchHelper(`https://api-football-v1.p.rapidapi.com/v3/leagues?country=${selectCountry}`, 'GET');
    console.log(response);
    setLoading(false);
    setLeagues(response);
  }

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (selectCountry.trim().length < 1) return;
    getLeagues();
    onResetForm();
  }

  useEffect(() => {
    getCountries()
    setLeagues([])
  }, [])
  

  return (
    <div className="container">
      {/* <div className="d-flex justify-content-center my-5 shadow-lg"> */}
        <div className="card my-5" style={{ width: "100%", height: "100%" }}>
          <img src="https://i.ibb.co/GFRrFzF/audience-g2cd9f5f27-1920.jpg" className="img-fluid" alt="Football Fans" style={{ height: "10rem" }} />
          <div className="card-body">
            <div className="d-flex justify-content-center">
              {/* <InputSearch
                inputName='searchLeague'
                inputValue={searchLeague}
                onChange={onInputChange}
                onSearchSubmit={onSearchSubmit}
              /> */}
              <SelectCountry 
                inputName='selectCountry'
                inputValue={selectCountry}
                onChange={onInputChange}
                countries={countriesData}
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


