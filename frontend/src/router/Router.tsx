import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from 'src/contexts/auth.context';
import PublicRoutes from './Components/PublicRoutes/PublicRoutes';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';

export interface RouteProps {
  path: string;
  element: React.ReactNode;
}

const Router = (): JSX.Element => {
  const { authState } = useAuth();
  const { isLoggedIn } = authState;
  return (
    <BrowserRouter>
      {isLoggedIn ? <ProtectedRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
};

export default Router;
