import { Routes, Route, Navigate } from 'react-router-dom';
import { SearchLeague } from '../leagues/pages/SearchLeague';
import { TeamsRoutes } from '../teams/routes/TeamsRoutes';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/teams/*" element={<TeamsRoutes />} />
                <Route path="/*" element={<SearchLeague />} />
                <Route path="/" element={ <Navigate  to='/search'/> } />
            </Routes>
        </>
    )
}
