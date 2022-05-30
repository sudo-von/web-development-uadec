import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Company from 'src/screens/Company/Company';
import Home from 'src/screens/Home/Home';
import Sale from 'src/screens/Sale/Sale';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/services" element={<Home />} />
        <Route path="/requirements" element={<Home />} />
        <Route path="/contacts" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/buy" element={<Home />} />
        <Route path="/build" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/moving" element={<Home />} />
        <Route path="/insurance" element={<Home />} />
        <Route path="/privacy-policies" element={<Home />} />
        <Route path="/frequent-questions/faq" element={<Home />} />
        <Route path="/frequent-questions/quality-policies" element={<Home />} />
        <Route path="/frequent-questions/tips" element={<Home />} />
        <Route path="/frequent-questions/iso" element={<Home />} />
        <Route path="/news/echo-houses" element={<Home />} />
        <Route path="/news/isste" element={<Home />} />
        <Route path="/news/foreign" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
