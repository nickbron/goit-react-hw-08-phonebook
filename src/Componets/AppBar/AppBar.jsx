import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from 'Componets/AuthNav/AuthNav';
import { Header } from './AppBar.styled';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/Auth';

export default function Appbar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
