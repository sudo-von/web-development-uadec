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
import Services from 'src/screens/Services/Services';
import { RouteProps } from 'src/router/Router';
import Moving from 'src/screens/Moving/Moving';
import Build from 'src/screens/Build/Build';

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
    element: <Services />,
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
    path: '/admin',
    element: <Login />,
  },
  {
    path: '/buy',
    element: <Buy />,
  },
  {
    path: '/build',
    element: <Build />,
  },
  {
    path: '/sale',
    element: <Sale />,
  },
  {
    path: '/moving',
    element: <Moving />,
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
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

const PublicRoutes = (): JSX.Element => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default PublicRoutes;
