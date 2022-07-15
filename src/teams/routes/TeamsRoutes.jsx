import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/components';
import { TeamInfoPage, TeamEventsPage, TeamPlayersPage, TeamsContentPage } from '../pages';

export const TeamsRoutes = () => {
    return (
        <>
            {/* <Navbar /> */}

            {/* <div className='container'> */}
                <Routes>
                    <Route path="/:idLeague/info/:idTeam" element={<TeamInfoPage />} />
                    <Route path="/:idLeague/events/:idTeam" element={<TeamEventsPage />} />
                    <Route path="/:idLeague/players/:idTeam" element={<TeamPlayersPage />} />
                    <Route path="/:idLeague" element={<TeamsContentPage />} />
                    <Route path="/" element={<Navigate to='/' />} />
                </Routes>
            {/* </div> */}
        </>
    )
}
