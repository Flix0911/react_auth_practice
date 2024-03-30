import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import HomePage from '../pages/homepage'
import LoginPage from '../pages/LoginPage'
import PrivateRoute from '../utils/PrivateRoute'

const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route>
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>}/>
        <Route path="/login" element={<LoginPage/>}/>
    </Route>
    </>
));

export default router;
