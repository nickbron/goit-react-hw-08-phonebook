import Navigation from '../Navigation/Navigation';
import AuthNav from 'Componets/AuthNav/AuthNav';
import { Header } from './AppBar.styled';
import UserMenu from '../UserMenu';

export default function Appbar() {
  return (
    <Header>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </Header>
  );
}
