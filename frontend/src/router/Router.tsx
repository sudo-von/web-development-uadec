import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'src/screens/Home/Home';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/requirements" element={<Home />} />
        <Route path="/contacts" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/buy" element={<Home />} />
        <Route path="/build" element={<Home />} />
        <Route path="/sale" element={<Home />} />
        <Route path="/moving" element={<Home />} />
        <Route path="/insurance" element={<Home />} />
        <Route path="/privacy-policies" element={<Home />} />
        <Route path="/faq-policies" element={<Home />} />
        <Route path="/quality-policies" element={<Home />} />
        <Route path="/tips" element={<Home />} />
        <Route path="/iso" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
