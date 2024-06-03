import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from '../../pages/main/main.tsx';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import Login from '../../pages/login/login.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Offer from '../../pages/offer/offer.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';

type AppProps = {
  cardCount: number;
}

function App({cardCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main cardCount={cardCount}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer/>}
        />
        <Route
          path="*"
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
