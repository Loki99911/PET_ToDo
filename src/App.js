import { Route, Routes } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { ExperiencePage } from './pages/ExperiencePage/ExperiencePage';
import { ContactPage } from './pages/ContactsPage/ContactsPage';
import { ExamplePage } from './pages/ExamplePage/ExamplePage';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProfilePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/todo" element={<ExamplePage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
