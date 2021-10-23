import { NavigLink, Navig } from './AuthNav.styled';

const AuthNav = () => (
  <Navig>
    <NavigLink to="/Register">Registration</NavigLink>
    <NavigLink to="/Login">Login</NavigLink>
  </Navig>
);

export default AuthNav;
