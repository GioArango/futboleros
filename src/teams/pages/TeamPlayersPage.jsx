import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { FetchHelper } from '../../helpers/FetchHelper';
import { LeagueTeamContext } from '../../context/LeagueTeamContext';
import { PlayersList } from '../components/PlayersList';
import { Loader } from '../../ui/components';

export const TeamPlayersPage = () => {

    const { idTeam } = useParams();
    const { setPlayers, playersData } = useContext(LeagueTeamContext);
    const [load, setLoad] = useState(true);
    const [playersList, setPlayersList] = useState();
    const allPlayers = [];

    const getPlayers = async ( page = 1 ) => {
        const players = await FetchHelper(`https://api-football-v1.p.rapidapi.com/v3/players?team=${idTeam}&season=2022&page=${page}`, 'GET');
        const { response, paging } = players;
        const { total, current } = paging;

        const data = {
            players: response,
            currentPage: current,
            totalPages: total
        }

        return data;
    }
    
    
    const getPlayersData = async ( page = 1 ) => {
        const { players, currentPage, totalPages } = await getPlayers( page );        
        
        players.forEach(player => {
            allPlayers.push(player);
        });
        
        console.log('curent', currentPage, 'total', totalPages);
        if( currentPage < totalPages ) {
            page = currentPage + 1;
           
            setTimeout(() => {
                getPlayersData(page);
            }, 1500);

        } else {
            allPlayers.filter( (idPlayer, index) => {
                return allPlayers.indexOf(idPlayer) === index
            });
            setPlayersList(allPlayers);
            console.log('Data', allPlayers);
            setLoad(false);
        }
        return allPlayers;
    }

    
    useEffect(() => {
        getPlayersData();        
    }, [idTeam]);


    return (
        <>
            <h1>TeamPlayers</h1>
            <hr />

            {
                (load)
                ?
                <Loader />
                :
                <PlayersList 
                    playersList={playersList}
                />                
            }
        </>
    )
}
