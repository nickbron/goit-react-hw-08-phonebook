import { toast, Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import authSelectors from '../redux/Auth/auth-selectors';
import { authOperations } from 'redux/Auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Appbar from './AppBar/AppBar';
import Wrapper from './Container/container';

// const HomeView = lazy(() =>
//   import('./Views/HomeView' /*webpackChunkName: "home-page"*/),
// );

const RegisterView = lazy(() =>
  import('./Views/RegisterView' /*webpackChunkName: "Registration-page"*/),
);
const LoginView = lazy(() =>
  import('./Views/LoginView' /*webpackChunkName: "Login-page"*/),
);

const PhoneBookView = lazy(() =>
  import('./Views/PhoneBookView' /*webpackChunkName: "PhoneBook-page"*/),
);

export default function App() {
  const dispatch = useDispatch();
  const isError = useSelector(authSelectors.getError);

  useEffect(() => {
    if (isError) {
      toast.error('Incorrect Login or Password...');
    }
  }, [isError]);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <Appbar />
        <Suspense fallback={<h1>LOADING...</h1>}>
          <Switch>
            {/* <PublicRoute path="/" exact>
              <HomeView />
            </PublicRoute> */}
            <PrivateRoute path="/contacts" redirectTo="/login">
              <PhoneBookView />
            </PrivateRoute>
            <PublicRoute
              exact
              path="/register"
              redirectTo="/contacts"
              restricted
            >
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>
          </Switch>
          <Toaster
            toastOptions={{
              className: '',
              style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
              },
            }}
          />
        </Suspense>
      </Wrapper>
    </>
  );
}
