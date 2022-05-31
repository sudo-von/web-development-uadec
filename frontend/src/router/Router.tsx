import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/services" element={<Home />} />
        <Route path="/requirements" element={<Requirements />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/search" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/build" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/moving" element={<Home />} />
        <Route path="/insurance" element={<Home />} />
        <Route path="/privacy-policies" element={<PrivacyPolicies />} />
        <Route path="/frequent-questions/faq" element={<FrequentQuestions />} />
        <Route
          path="/frequent-questions/quality-policies"
          element={<QualityPolicies />}
        />
        <Route path="/frequent-questions/tips" element={<Tips />} />
        <Route path="/frequent-questions/iso" element={<Iso />} />
        <Route path="/news/echo-houses" element={<Home />} />
        <Route path="/news/isste" element={<Home />} />
        <Route path="/news/foreign" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
