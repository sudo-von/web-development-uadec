import { Navigate, Route, Routes } from 'react-router-dom';
import Company from 'src/screens/Company/Company';
import Home from 'src/screens/Home/Home';
import Requirements from 'src/screens/Requirements/Requirements';
import Sale from 'src/screens/Sale/Sale';
import Buy from 'src/screens/Buy/Buy';
import Contact from 'src/screens/Contact/Contact';
import UpdateCity from 'src/screens/UpdateCity/UpdateCity';
import PrivacyPolicies from 'src/screens/PrivacyPolicies/PrivacyPolicies';
import QualityPolicies from 'src/screens/QualityPolicies/QualityPolicies';
import FrequentQuestions from 'src/screens/FrequentQuestions/FrequentQuestions';
import Tips from 'src/screens/Tips/Tips';
import Iso from 'src/screens/Iso/Iso';
import { RouteProps } from 'src/router/Router';
import Logout from 'src/screens/Logout/Logout';
import CreateHouse from 'src/screens/CreateHouse/CreateHouse';
import CreateState from 'src/screens/CreateState/CreateState';
import CreateCity from 'src/screens/CreateCity/CreateCity';
import States from 'src/screens/States/States';
import Cities from 'src/screens/Cities/Cities';
import UpdateState from 'src/screens/UpdateState/UpdateState';
import Houses from 'src/screens/Houses/Houses';
import Services from 'src/screens/Services/Services';
import Build from 'src/screens/Build/Build';
import Moving from 'src/screens/Moving/Moving';
import EchoHouses from 'src/screens/EchoHouses/EchoHouses';
import Isste from 'src/screens/Isste/Isste';
import Foreign from 'src/screens/Foreing/Foreing';
import Insurance from 'src/screens/Insurance/Insurance';
import UpdateHouse from 'src/screens/UpdateHouse/UpdateHouse';

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
    element: <Houses />,
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
    element: <Insurance />,
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
    element: <EchoHouses />,
  },
  {
    path: '/news/isste',
    element: <Isste />,
  },
  {
    path: '/news/foreign',
    element: <Foreign />,
  },
  {
    path: '/logout',
    element: <Logout />,
  },
  {
    path: '/create-house',
    element: <CreateHouse />,
  },
  {
    path: '/create-state',
    element: <CreateState />,
  },
  {
    path: '/create-city',
    element: <CreateCity />,
  },
  {
    path: '/states',
    element: <States />,
  },
  {
    path: '/cities',
    element: <Cities />,
  },
  {
    path: '/update-city/:id',
    element: <UpdateCity />,
  },
  {
    path: '/update-state/:id',
    element: <UpdateState />,
  },
  {
    path: '/update-house/:id',
    element: <UpdateHouse />,
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
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default ProtectedRoutes;
