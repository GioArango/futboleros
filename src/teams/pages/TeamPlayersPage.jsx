import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchHelper } from '../../helpers/FetchHelper';
import { PlayersList } from '../components/PlayersList';
import { Loader, PlaceholderCard } from '../../ui/components';
import { sortPlayers } from '../helpers';
import { PlaceholderPlayerCard } from '../../ui/components/PlaceholderPlayerCard';

export const TeamPlayersPage = () => {

    const { idTeam } = useParams();
    const [load, setLoad] = useState(true);
    const [playersList, setPlayersList] = useState();
    let allPlayers = [];

    const getPlayers = async (page = 1) => {
        const players = await FetchHelper(`https://api-football-v1.p.rapidapi.com/v3/players?team=${idTeam}&season=2021&page=${page}`, 'GET');
        const { response, paging } = players;
        const { total, current } = paging;

        const data = {
            players: response,
            currentPage: current,
            totalPages: total
        }

        return data;
    }


    const getPlayersData = async (page = 1) => {
        const { players, currentPage, totalPages } = await getPlayers(page);

        allPlayers.push(...players);

        console.log('curent', currentPage, 'total', totalPages);
        if (currentPage < totalPages) {
            page = currentPage + 1;

            setTimeout(() => {
                getPlayersData(page);
            }, 1500);

        } else {
            allPlayers = sortPlayers(allPlayers);
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
        <div className='my-3'>
            {
                (load)
                    ?
                    <div className="container">
                        <div className="row">
                            <PlaceholderPlayerCard />
                            <PlaceholderPlayerCard />
                            <PlaceholderPlayerCard />
                        </div>
                    </div>
                    :
                    <PlayersList
                        playersList={playersList}
                    />
            }
        </div>
    )
}
