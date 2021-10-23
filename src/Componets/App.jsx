import { Toaster } from 'react-hot-toast';
import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Appbar from './AppBar/AppBar';
import Wrapper from './Container/container';

const HomeView = lazy(() =>
  import('./Views/HomeView' /*webpackChunkName: "home-page"*/),
);

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
  return (
    <>
      <Wrapper>
        <Appbar />
        <Suspense fallback={<h1>LOADING...</h1>}>
          <Switch>
            <Route path="/contacts" exact>
              <PhoneBookView />
            </Route>
            <Route path="/register" exact>
              <RegisterView />
            </Route>
            <Route path="/login" exact>
              <LoginView />
            </Route>
          </Switch>
        </Suspense>
      </Wrapper>
    </>
  );
}
