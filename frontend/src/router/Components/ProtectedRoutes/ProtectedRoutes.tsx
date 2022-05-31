import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Company from 'src/screens/Company/Company';
import Home from 'src/screens/Home/Home';
import Requirements from 'src/screens/Requirements/Requirements';
import Sale from 'src/screens/Sale/Sale';
import Buy from 'src/screens/Buy/Buy';
import Contact from 'src/screens/Contact/Contact';
import Login from 'src/screens/Login/Login';
import PrivacyPolicies from 'src/screens/PrivacyPolicies/PrivacyPolicies';
import QualityPolicies from 'src/screens/QualityPolicies/QualityPolicies';
import FrequentQuestions from 'src/screens/FrequentQuestions/FrequentQuestions';
import Tips from 'src/screens/Tips/Tips';
import Iso from 'src/screens/Iso/Iso';
import { RouteProps } from 'src/router/Router';
import Logout from 'src/screens/Logout/Logout';

const routes: RouteProps[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/company',
    element: <Company />,
  },
  {
    path: '/services',
    element: <Home />,
  },
  {
    path: '/requirements',
    element: <Requirements />,
  },
  {
    path: '/contacts',
    element: <Contact />,
  },
  {
    path: '/search',
    element: <Home />,
  },
  {
    path: '/buy',
    element: <Buy />,
  },
  {
    path: '/build',
    element: <Home />,
  },
  {
    path: '/sale',
    element: <Sale />,
  },
  {
    path: '/moving',
    element: <Home />,
  },
  {
    path: '/insurance',
    element: <Home />,
  },
  {
    path: '/privacy-policies',
    element: <PrivacyPolicies />,
  },
  {
    path: '/frequent-questions/faq',
    element: <FrequentQuestions />,
  },
  {
    path: '/frequent-questions/quality-policies',
    element: <QualityPolicies />,
  },
  {
    path: '/frequent-questions/tips',
    element: <Tips />,
  },
  {
    path: '/frequent-questions/iso',
    element: <Iso />,
  },
  {
    path: '/news/echo-houses',
    element: <Home />,
  },
  {
    path: '/news/isste',
    element: <Home />,
  },
  {
    path: '/news/foreign',
    element: <Home />,
  },
  {
    path: '/logout',
    element: <Logout />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

const ProtectedRoutes = (): JSX.Element => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default ProtectedRoutes;