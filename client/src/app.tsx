import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import AboutPage from './pages/About/AboutPage';
import WorksPage from './pages/Works/WorksPage';
import GuestbookPage from './pages/Guestbook/GuestbookPage';
import NotFound from './pages/NotFound/NotFound';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<AboutPage />} />
        <Route path="works" element={<WorksPage />} />
        <Route path="guestbook" element={<GuestbookPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
